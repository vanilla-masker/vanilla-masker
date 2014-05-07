(function() {

	var MaskMoney = function(options) {
		options = options || {};
		this.opts = {
			precision: options['precision'] || 2,
			separator: options['separator'] || ',',
			delimiter: options['delimiter'] || '.',
			unit: options['unit'] || ''
		};
	};

	function onType(e) {
		e.target.value = this.mask(e.target.value);
	};

	MaskMoney.prototype.maskElement = function(el) {
		el.addEventListener("keypress", onType.bind(this));
		el.addEventListener("keyup", onType.bind(this));
		el.addEventListener("keydown", onType.bind(this));
	};

	MaskMoney.prototype.unmask = function(money) {
		return money.toString().replace(/[\D]/g, '');
	};

	MaskMoney.prototype.mask = function(number) {
		var 
			precision = this.opts.precision,
			delimiter = this.opts.delimiter,
			separator = this.opts.separator,
			unit = this.opts.unit,
			value = number.toString().replace(/[\D]/g, ''),
			unitSpace = unit.length ? ' ' : '',
			clearDelimiter = new RegExp("^(0|\\"+ delimiter +")"),
			decimal = value.substr(value.length - precision, precision),
			money = value.substr(0, value.length - precision),
		  masked = money.substr(0, money.length % 3), 
			money = money.substr(money.length % 3, money.length)
		;
		for (var i = 0; i < money.length; i++) {
		   (i % 3 == 0) && (masked += delimiter);
		   masked += money.charAt(i);
		}
		masked = masked.replace(clearDelimiter, '');
		masked = masked.length ? masked : '0';
		return (unit + unitSpace + masked + separator + decimal);
	};

	window.MaskMoney = MaskMoney;

})();