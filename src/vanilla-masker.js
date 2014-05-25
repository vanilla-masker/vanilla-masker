(function() {

  var VanillaMasker = function(opts) {
    opts = opts || {};
    this.opts = {
      precision: opts.hasOwnProperty('precision') ? opts.precision : 2,
      separator: opts.separator || ',',
      delimiter: opts.delimiter || '.',
      unit: opts.unit && (opts.unit + ' ') || '',
      zeroCents: opts.zeroCents,
      phone: opts.phone || '(99) 9999-9999'
    };
    this.lastOutput = '';
    this.moneyPrecision = opts.zeroCents ? 0 : this.opts.precision;
    this.DIGIT = '9';
    this.ALPHA = 'A';
    this.WILDCARD = '?';
  };

  window.VanillaMasker = VanillaMasker;

})();
