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

	window.VanillaMasker = VanillaMasker;

})();
