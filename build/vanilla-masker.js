(function() {

	var VanillaMasker = function(opts) {
		opts = opts || {};
		this.opts = {
			precision: opts.hasOwnProperty('precision') ? opts.precision : 2,
			separator: opts['separator'] || ',',
			delimiter: opts['delimiter'] || '.',
			unit: opts['unit'] && (opts['unit'] + ' ') || '',
			zeroCents: opts['zeroCents']
		};
		this.lastOutput = '';
		this.moneyPrecision = opts['zeroCents'] ? 0 : this.opts.precision;
	};

	window.VanillaMasker = VanillaMasker;

})();
;(function() {

	VanillaMasker.prototype.maskMoney = function(el) {
		var that = this
			, elements = [].slice.call(el)
			, elements = elements.length ? elements : [el]
			, onType = function(e) {
				e.target.value = that.toMoney(e.target.value);
			}
		;
		for (var i = 0, len = elements.length; i < len; i++) {
			if (elements[i].addEventListener) {
				elements[i].addEventListener("keyup", onType);
				elements[i].addEventListener("keydown", onType);
			} else {
				elements[i].attachEvent("onkeyup", onType);
				elements[i].attachEvent("onkeydown", onType);
			}
		}
	};

	VanillaMasker.prototype.toMoney = function(input) {
		var precision = this.opts.precision
			, separator = this.opts.separator
		;
		if (this.opts.zeroCents) {
			var zeroMatcher = ("("+ separator +"[0]{0,"+ precision +"})")
				, zeroRegExp = new RegExp(zeroMatcher, "g")
				, initialInputLength = input.length || 0
				, input = input.toString().replace(zeroRegExp, '')
			;
			if (initialInputLength < this.lastOutput.length) {
				input = input.slice(0, input.length - 1);
			}
		}
		var number = input.toString().replace(/[\D]/g, '')
			, clearDelimiter = new RegExp("^(0|\\"+ this.opts.delimiter +")")
			, clearSeparator = new RegExp("(\\"+ separator +")$")
			, money = number.substr(0, number.length - this.moneyPrecision)
			, masked = money.substr(0, money.length % 3)
			, money = money.substr(money.length % 3, money.length)
			, cents = new Array(precision + 1).join('0')
		;
		for (var i = 0, len = money.length; i < len; i++) {
			(i % 3 == 0) && (masked += this.opts.delimiter);
			masked += money.charAt(i);
		}
		masked = masked.replace(clearDelimiter, '');
		masked = masked.length ? masked : '0';
		if (!this.opts.zeroCents) {
			var beginCents = number.length - precision;
			var centsValue = number.substr(beginCents, precision);
			var centsLength = centsValue.length;
			var centsSliced = (precision > centsLength) ? precision : centsLength;
			cents = (cents + centsValue).slice(-centsSliced);
		}
		var output = (this.opts.unit + masked + separator + cents);
		this.lastOutput = output = output.replace(clearSeparator, '');
		return output;
	};

})();