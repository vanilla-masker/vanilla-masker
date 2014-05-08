(function() {

	VanillaMasker.prototype.maskMoney = function(el) {
		var onType = (function(e) {
			e.target.value = this.toMoney(e.target.value);
		}).bind(this);

		var addEventListeners = (function(el) {
			el.addEventListener("keypress", onType);
			el.addEventListener("keyup", onType);
			el.addEventListener("keydown", onType);
			el.addEventListener("change", onType);
		}).bind(this);
		
		if (el instanceof NodeList || el instanceof Array) {
			for (var i = 0, len = el.length; i < len; i++) {
				addEventListeners(el.item(i));
			}
		} else {
			addEventListeners(el);
		}
	};

	VanillaMasker.prototype.toMoney = function(number) {
		var value = number.toString().replace(/[\D]/g, '')
			, unitSpace = this.opts.unit.length ? ' ' : ''
			, clearDelimiter = new RegExp("^(0|\\"+ this.opts.delimiter +")")
			, decimal = value.substr(value.length - this.opts.precision, this.opts.precision)
			, money = value.substr(0, value.length - this.opts.precision)
			, masked = money.substr(0, money.length % 3)
			, money = money.substr(money.length % 3, money.length)
		;
		for (var i = 0, len = money.length; i < len; i++) {
			(i % 3 == 0) && (masked += this.opts.delimiter);
			masked += money.charAt(i);
		}
		masked = masked.replace(clearDelimiter, '');
		masked = masked.length ? masked : '0';
		decimal = decimal.length < 2 ? ('0' + decimal) : decimal;

		return (this.opts.unit + unitSpace + masked + this.opts.separator + decimal);
	};

})();