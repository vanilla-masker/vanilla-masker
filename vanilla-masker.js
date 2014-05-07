(function() {

	var VanillaMasker = function(options) {
		options = options || {};
		this.opts = {
			precision: options['precision'] || 2,
			separator: options['separator'] || ',',
			delimiter: options['delimiter'] || '.',
			unit: options['unit'] || ''
		};
	};

	VanillaMasker.prototype.maskMoneyElement = function(el) {
		function onType(e) {
			e.target.value = this.maskMoney(e.target.value);
		};
		if (el instanceof NodeList || el instanceof Array) {
			for (var i = 0, len = el.length; i < len; i++) {
				el.item(i).addEventListener("keypress", onType.bind(this));
				el.item(i).addEventListener("keyup", onType.bind(this));
				el.item(i).addEventListener("keydown", onType.bind(this));	
			}
		} else {
			el.addEventListener("keypress", onType.bind(this));
			el.addEventListener("keyup", onType.bind(this));
			el.addEventListener("keydown", onType.bind(this));
		}
	};

	VanillaMasker.prototype.maskMoney = function(number) {
		var 
			value = number.toString().replace(/[\D]/g, ''),
			unitSpace = this.opts.unit.length ? ' ' : '',
			clearDelimiter = new RegExp("^(0|\\"+ this.opts.delimiter +")"),
			decimal = value.substr(value.length - this.opts.precision, this.opts.precision),
			money = value.substr(0, value.length - this.opts.precision),
		  masked = money.substr(0, money.length % 3), 
			money = money.substr(money.length % 3, money.length)
		;
		for (var i = 0, len = money.length; i < len; i++) {
			(i % 3 == 0) && (masked += this.opts.delimiter);
			masked += money.charAt(i);
		}
		masked = masked.replace(clearDelimiter, '');
		masked = masked.length ? masked : '0';
		return (this.opts.unit + unitSpace + masked + this.opts.separator + decimal);
	};

	window.VanillaMasker = VanillaMasker;

})();