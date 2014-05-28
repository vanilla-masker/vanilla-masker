describe("VanillaMasker.maskPhone", function() {

  it('console log "The element is null." if the element is undefined', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskPhone(undefined);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

  it('console log "The element is null." if the element is null', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskPhone(null);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

  it('console log "The element is null." if the element is []', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskPhone([]);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

});

describe("VanillaMasker.toPhone", function() {

  it('returns "(10) 9991-1111" number when input is 1099911111', function() {
    var masker = new VanillaMasker();
    expect(masker.toPhone(1099911111)).toEqual('(10) 9991-1111');
  });

  it('returns "(10) 11" number when input is 1011', function() {
    var masker = new VanillaMasker();
    expect(masker.toPhone('1011')).toEqual('(10) 11');
  });

  it('returns "+10 11 4444-44" number when input is 1011444444', function() {
    var masker = new VanillaMasker({phone: "+99 99 9999-99"});
    expect(masker.toPhone('1011444444')).toEqual('+10 11 4444-44');
  });

});
