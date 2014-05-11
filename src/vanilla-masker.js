(function() {

	var VanillaMasker = function(opts) {
		opts = opts || {};
		this.opts = {
			precision: opts.hasOwnProperty('precision') ? opts.precision : 2,
			separator: opts.separator || ',',
			delimiter: opts.delimiter || '.',
			unit: opts.unit && (opts.unit + ' ') || '',
			zeroCents: opts.zeroCents
		};
		this.lastOutput = '';
		this.moneyPrecision = opts.zeroCents ? 0 : this.opts.precision;
	};

	window.VanillaMasker = VanillaMasker;

})();
