(function() {

	var VanillaMasker = function(opts) {
		opts = opts || {};
		this.opts = {
			precision: opts.hasOwnProperty('precision') ? opts.precision : 2,
			separator: opts['separator'] || ',',
			delimiter: opts['delimiter'] || '.',
			unit: opts['unit'] || '',
			zeroCents: opts['zeroCents']
		};
		this.lastNumber = '';
	};

	window.VanillaMasker = VanillaMasker;

})();
