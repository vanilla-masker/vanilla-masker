describe("VanillaMasker.maskNumber", function() {

  it('throws error: "VanillaMasker: There is no element to bind." when element is undefined', function() {
    expect(function() {
      VMasker(undefined).maskNumber();
    }).toThrow(new Error('VanillaMasker: There is no element to bind.'));
  });

  it('throws error: "VanillaMasker: There is no element to bind." when element is null', function() {
    expect(function() {
      VMasker(null).maskNumber();
    }).toThrow(new Error('VanillaMasker: There is no element to bind.'));
  });

  it('throws error: "VanillaMasker: There is no element to bind." when element is blank', function() {
    expect(function() {
      VMasker("").maskNumber();
    }).toThrow(new Error('VanillaMasker: There is no element to bind.'));
  });

  it('does not throw error when element is empty array', function() {
    expect(function() {
      VMasker([]).maskNumber();
    }).not.toThrow();
  });

});

describe("VanillaMasker.toNumber", function() {

  it('returns 1000 number when input is 1000', function() {
    expect(VMasker.toNumber(1000)).toEqual('1000');
  });

  it('returns 100000 number when input is 1a0b0c000', function() {
    expect(VMasker.toNumber('1a0b0c000')).toEqual('100000');
  });

  it('returns 10 number when input is 1-0', function() {
    expect(VMasker.toNumber('1-0')).toEqual('10');
  });

  it('returns -10 number when input is -10', function() {
    expect(VMasker.toNumber('-10')).toEqual('-10');
  });

});
