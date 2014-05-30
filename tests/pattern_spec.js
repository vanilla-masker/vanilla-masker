describe("VanillaMasker.maskPattern", function() {

  it('console log "There is no element to bind." if the element is undefined', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskPattern(undefined);
    expect(console.log).toHaveBeenCalledWith('There is no element to bind.');
  });

  it('console log "There is no element to bind." if the element is null', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskPattern(null);
    expect(console.log).toHaveBeenCalledWith('There is no element to bind.');
  });

  it('console log "There is no element to bind." if the element is []', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskPattern([]);
    expect(console.log).toHaveBeenCalledWith('There is no element to bind.');
  });

});

describe("VanillaMasker.toPattern", function() {

  it('returns "(10) 9991-1111" number when input is 1099911111', function() {
    var masker = new VanillaMasker();
    expect(masker.toPattern(1099911111, '(99) 9999-9999')).toEqual('(10) 9991-1111');
  });

  it('returns "(10) 11" number when input is 1011', function() {
    var masker = new VanillaMasker();
    expect(masker.toPattern('1011', '(99) 9999-9999')).toEqual('(10) 11');
  });

  it('returns "+10 11 4444-44" number when input is 1011444444', function() {
    var masker = new VanillaMasker();
    expect(masker.toPattern('1011444444', '+99 99 9999-99')).toEqual('+10 11 4444-44');
  });

  it('returns "12/12/2000" number when input is 12122000', function() {
    var masker = new VanillaMasker();
    expect(masker.toPattern(12122000, '99/99/9999')).toEqual('12/12/2000');
  });

  it('returns "10/11" number when input is 1011', function() {
    var masker = new VanillaMasker();
    expect(masker.toPattern('1011', '99/99/9999')).toEqual('10/11');
  });

  it('returns "2000/12/12" number when input is 20001212', function() {
    var masker = new VanillaMasker();
    expect(masker.toPattern('20001212', '9999/99/99')).toEqual('2000/12/12');
  });

  it('returns "999.111.111-01" number when input is 99911111101', function() {
    var masker = new VanillaMasker();
    expect(masker.toPattern(99911111101, '999.999.999-99')).toEqual('999.111.111-01');
  });

  it('returns "101.1" number when input is 1011', function() {
    var masker = new VanillaMasker();
    expect(masker.toPattern('1011', '999.999.999-99')).toEqual('101.1');
  });

});
