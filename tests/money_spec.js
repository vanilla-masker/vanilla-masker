describe("VanillaMasker.maskMoney", function() {

  it('console log "VanillaMasker: There is no element to bind." if the element is undefined', function() {
    expect(function() {
      VMasker(undefined).maskMoney();
    }).toThrow(new Error('VanillaMasker: There is no element to bind.'));
  });

  it('console log "VanillaMasker: There is no element to bind." if the element is null', function() {
    expect(function() {
      VMasker(null).maskMoney();
    }).toThrow(new Error('VanillaMasker: There is no element to bind.'));
  });
});

describe("VanillaMasker.toMoney", function() {

  it('returns the default money', function() {
    var masker = new VanillaMasker();
    expect(masker.toMoney(10000000000)).toEqual('100.000.000,00');
  });

  it('returns 1.000,00 money when number is 1a0b0c000', function() {
    var masker = new VanillaMasker();
    expect(masker.toMoney('1a0b0c000')).toEqual('1.000,00');
  });

  it('returns 0,00 money when number is 0', function() {
    var masker = new VanillaMasker();
    expect(masker.toMoney(0)).toEqual('0,00');
  });

  it('returns 0,01 money when number is 1', function() {
    var masker = new VanillaMasker();
    expect(masker.toMoney(1)).toEqual('0,01');
  });

  it('returns 0,10 default money number is 10', function() {
    var masker = new VanillaMasker();
    expect(masker.toMoney(10)).toEqual('0,10');
  });

  it('returns 199,59 money when number is 199.59 with decimal', function() {
    var masker = new VanillaMasker();
    expect(masker.toMoney(199.59)).toEqual('199,59');
  });

  it('returns 199,59 money when number is a string 199.59 with decimal', function() {
    var masker = new VanillaMasker();
    expect(masker.toMoney('199.59')).toEqual('199,59');
  });

  it('returns 1.000,00 money when number is a string', function() {
    var masker = new VanillaMasker();
    expect(masker.toMoney('100000')).toEqual('1.000,00');
  });

  it('returns 1.000 money when precision is 0', function() {
    var masker = new VanillaMasker({precision: 0});
    expect(masker.toMoney(1000)).toEqual('1.000');
  });

  it('returns R$ 10.000,00 when unit is R$', function() {
    var masker = new VanillaMasker({unit: 'R$'});
    expect(masker.toMoney(10000000000)).toEqual('R$ 100.000.000,00');
  });

  it('returns 100,000,000,00 when delimiter is ","', function() {
    var masker = new VanillaMasker({delimiter: ','});
    expect(masker.toMoney(10000000000)).toEqual('100,000,000,00');
  });

  it('returns 100.000.000.00 when separator is "."', function() {
    var masker = new VanillaMasker({separator: '.'});
    expect(masker.toMoney(10000000000)).toEqual('100.000.000.00');
  });

  it('returns 100.000.000,00 when zeroCents is true', function() {
    var masker = new VanillaMasker({zeroCents: true});
    expect(masker.toMoney(100000000)).toEqual('100.000.000,00');
  });

});
