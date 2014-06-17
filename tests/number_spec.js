describe("VanillaMasker.maskNumber", function() {

  it('console log "There is no element to bind." if the element is undefined', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskNumber(undefined);
    expect(console.log).toHaveBeenCalledWith('There is no element to bind.');
  });

  it('console log "There is no element to bind." if the element is null', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskNumber(null);
    expect(console.log).toHaveBeenCalledWith('There is no element to bind.');
  });

  it('console log "There is no element to bind." if the element is []', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskNumber([]);
    expect(console.log).toHaveBeenCalledWith('There is no element to bind.');
  });

});

describe("VanillaMasker.toNumber", function() {

  it('returns 1000 number when input is 1000', function() {
    var masker = new VanillaMasker();
    expect(masker.toNumber(1000)).toEqual('1000');
  });

  it('returns 100000 number when input is 1a0b0c000', function() {
    var masker = new VanillaMasker();
    expect(masker.toNumber('1a0b0c000')).toEqual('100000');
  });

  it('returns 10 number when input is 1-0', function() {
    var masker = new VanillaMasker();
    expect(masker.toNumber('1-0')).toEqual('10');
  });

  it('returns -10 number when input is -10', function() {
    var masker = new VanillaMasker();
    expect(masker.toNumber('-10')).toEqual('-10');
  });

});
