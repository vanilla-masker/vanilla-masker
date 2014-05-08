(function() {

	VanillaMasker.prototype.maskMoney = function(el) {
		var that = this;

		var onType = function(e) {
			e.target.value = that.toMoney(e.target.value);
		};

		var addEventListeners = function(el) {
			el.addEventListener("keydown", onType);
			el.addEventListener("keyup", onType);
		};
		
		if (el instanceof NodeList || el instanceof Array) {
			for (var i = 0, len = el.length; i < len; i++) {
				addEventListeners(el.item(i));
			}
		} else {
			addEventListeners(el);
		}
	};

	VanillaMasker.prototype.toMoney = function(inputValue) {
		if (this.opts.zeroCents) {
			var clearZeroCents = new RegExp("("+ this.opts.separator + "[0]{"+ this.opts.precision +"})", "g")
				, inputValue = inputValue.toString().replace(clearZeroCents, '')
			;
		}
		var number = inputValue.toString().replace(/[\D]/g, '')
			, centsPrecision = this.opts.zeroCents ? 0 : this.opts.precision
			, unitSpace = this.opts.unit.length ? ' ' : ''
			, unit = this.opts.unit + unitSpace
			, clearDelimiter = new RegExp("^(0|\\"+ this.opts.delimiter +")")
			, clearSeparator = new RegExp("(\\"+ this.opts.separator +")$")
			, money = number.substr(0, number.length - centsPrecision)
			, masked = money.substr(0, money.length % 3)
			, money = money.substr(money.length % 3, money.length)
			, decimal = ''
			, isBackspace
		;
		for (var i = 0, len = money.length; i < len; i++) {
			(i % 3 == 0) && (masked += this.opts.delimiter);
			masked += money.charAt(i);
		}
		masked = masked.replace(clearDelimiter, '');
		masked = masked.length ? masked : '0';
		if (this.opts.zeroCents) {
			if (this.lastInputNumber.length != number.length) {
				for (var i = 0; i < this.opts.precision; i++) {
					decimal += '0';
				}
			}
		} else {
			decimal = number.substr(number.length - this.opts.precision, this.opts.precision);
			decimal = decimal.length < this.opts.precision ? ('0' + decimal) : decimal;
		}
		decimal = this.opts.separator + decimal;

		this.lastInputNumber = number;
		return (unit + masked + decimal).replace(clearSeparator, '');
	};

})();