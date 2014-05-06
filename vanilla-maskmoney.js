(function() {

	window.MaskMoney = function(el, options) {
		options = options || {};
		this.opts = {
			precision: options['precision'] || 2,
			separator: options['separator'] || ',',
			delimiter: options['delimiter'] || '.'
		};
		this.el = el;
		this.el.addEventListener("keypress", mask.bind(this));
		this.el.addEventListener("keyup", mask.bind(this));
		this.el.addEventListener("keydown", mask.bind(this));
	};

	function mask(e) {
		var value = this.el.value.replace(/[\D]/g, ''),
				decimal = value.substr(value.length - this.opts.precision, this.opts.precision),
				money = value.substr(0, value.length - this.opts.precision),
			  masked = money.substr(0, money.length % 3), 
				money = money.substr(money.length % 3, money.length);
		for (var i = 0; i < money.length; i++) {
		   if (i % 3 == 0) { masked += this.opts.delimiter }
		   masked += money.charAt(i);
		}
		masked = masked.replace(/^(0|\.)/, '');
		masked = masked.length ? masked : '0';
		this.el.value = (masked + this.opts.separator + decimal);
	};

})();