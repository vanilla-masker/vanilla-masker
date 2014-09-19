describe("VanillaMasker.maskPattern", function() {

  it('throws error: "VanillaMasker: There is no element to bind." when element is undefined', function() {
    expect(function() {
      VMasker(undefined).maskPattern();
    }).toThrow(new Error('VanillaMasker: There is no element to bind.'));
  });

  it('throws error: "VanillaMasker: There is no element to bind." when element is null', function() {
    expect(function() {
      VMasker(null).maskPattern();
    }).toThrow(new Error('VanillaMasker: There is no element to bind.'));
  });

  it('throws error: "VanillaMasker: There is no element to bind." when element is blank', function() {
    expect(function() {
      VMasker("").maskPattern();
    }).toThrow(new Error('VanillaMasker: There is no element to bind.'));
  });

  it('does not throw error when element is empty array', function() {
    expect(function() {
      VMasker([]).maskPattern();
    }).not.toThrow();
  });

});

describe("VanillaMasker.toPattern", function() {

  it('returns "(10) 9991-1111" pattern when input is 1099911111', function() {
    expect(VMasker.toPattern(1099911111, '(99) 9999-9999')).toEqual('(10) 9991-1111');
  });

  it('returns "(10) 11" pattern when input is 1011', function() {
    expect(VMasker.toPattern('1011', '(99) 9999-9999')).toEqual('(10) 11');
  });

  it('returns "+10 11 4444-44" pattern when input is 1011444444', function() {
    expect(VMasker.toPattern('1011444444', '+99 99 9999-99')).toEqual('+10 11 4444-44');
  });

  it('returns "12/12/2000" pattern when input is 12122000', function() {
    expect(VMasker.toPattern(12122000, '99/99/9999')).toEqual('12/12/2000');
  });

  it('returns "10/11" pattern when input is 1011', function() {
    expect(VMasker.toPattern('1011', '99/99/9999')).toEqual('10/11');
  });

  it('returns "2000/12/12" pattern when input is 20001212', function() {
    expect(VMasker.toPattern('20001212', '9999/99/99')).toEqual('2000/12/12');
  });

  it('returns "999.111.111-01" pattern when input is 99911111101', function() {
    expect(VMasker.toPattern(99911111101, '999.999.999-99')).toEqual('999.111.111-01');
  });

  it('returns "101.1" pattern when input is 1011', function() {
    expect(VMasker.toPattern('1011', '999.999.999-99')).toEqual('101.1');
  });

  it('returns "ABC-1234" pattern when input is ABC1234', function() {
    expect(VMasker.toPattern('ABC1234', 'AAA-1234')).toEqual('ABC-1234');
  });

  it('returns incomplete result: "AB" when input is AB1 and pattern is AAA-99', function() {
    expect(VMasker.toPattern('AB1', 'AAA-99')).toEqual('AB');
  });

});
