describe("VanillaMasker.maskCNPJ", function() {

  it('console log "The element is null." if the element is undefined', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskCNPJ(undefined);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

  it('console log "The element is null." if the element is null', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskCNPJ(null);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

  it('console log "The element is null." if the element is []', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskCNPJ([]);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

});

describe("VanillaMasker.toCNPJ", function() {

  it('returns "99.111.111/0001-33" number when input is 99111111000133', function() {
    var masker = new VanillaMasker();
    expect(masker.toCNPJ(99111111000133)).toEqual('99.111.111/0001-33');
  });

  it('returns "10.111" number when input is 10111', function() {
    var masker = new VanillaMasker();
    expect(masker.toCNPJ('10111')).toEqual('10.111');
  });

});
