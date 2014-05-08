describe("VanillaMasker.maskMoney", function() {

});

describe("VanillaMasker.toMoney", function() {
  
  it('returns the default money', function() {
    var masker = new VanillaMasker();
    expect(masker.toMoney(10000000000)).toEqual('100.000.000,00');
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

});
