(function() {

	var VanillaMasker = function(opts) {
		opts = opts || {};
		this.opts = {
			precision: opts.hasOwnProperty('precision') ? opts.precision : 2,
			separator: opts.hasOwnProperty('separator') ? opts.separator : ',',
			delimiter: opts.hasOwnProperty('delimiter') ? opts.delimiter : '.',
			unit: opts['unit'] || ''
		};
	};

	window.VanillaMasker = VanillaMasker;

})();
