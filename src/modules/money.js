(function() {

	VanillaMasker.prototype.maskMoney = function(el) {
		var that = this
			, onType = function(e) {
				e.target.value = that.toMoney(e.target.value);
			}
		;
		!(el instanceof NodeList || el instanceof Array) && (el = [el]);
		for (var i = 0, len = el.length; i < len; i++) {
			el[i].addEventListener("keypress", onType);
		}
	};

	VanillaMasker.prototype.toMoney = function(inputValue) {
		if (this.opts.zeroCents) {
			var zeroMatcher = ("("+this.opts.separator+"[0]{"+this.opts.precision+"})")
				, zeroRegExp = new RegExp(zeroMatcher, "g")
				, inputValue = inputValue.toString().replace(zeroRegExp, '')
			;
		}
		var number = inputValue.toString().replace(/[\D]/g, '')
			, clearDelimiter = new RegExp("^(0|\\"+this.opts.delimiter+")")
			, clearSeparator = new RegExp("(\\"+this.opts.separator+")$")
			, money = number.substr(0, number.length - this.moneyPrecision)
			, masked = money.substr(0, money.length % 3)
			, money = money.substr(money.length % 3, money.length)
			, cents = this.opts.separator + new Array(this.opts.precision + 1).join('0')
		;
		for (var i = 0, len = money.length; i < len; i++) {
			!(i % 3) && (masked += this.opts.delimiter);
			masked += money.charAt(i);
		}
		masked = masked.replace(clearDelimiter, '');
		masked = masked.length ? masked : '0';
		if (!this.opts.zeroCents) {
			var beginCents = number.length - this.opts.precision;
			centsValue = number.substr(beginCents, this.opts.precision);
			cents = (cents + centsValue).slice(-centsValue.length)
		}
		return (this.opts.unit + masked + cents).replace(clearSeparator, '');
	};

})();