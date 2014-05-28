describe("VanillaMasker.maskCPF", function() {

  it('console log "The element is null." if the element is undefined', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskCPF(undefined);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

  it('console log "The element is null." if the element is null', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskCPF(null);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

  it('console log "The element is null." if the element is []', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskCPF([]);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

});

describe("VanillaMasker.toCPF", function() {

  it('returns "999.111.111-01" number when input is 99911111101', function() {
    var masker = new VanillaMasker();
    expect(masker.toCPF(99911111101)).toEqual('999.111.111-01');
  });

  it('returns "101.1" number when input is 1011', function() {
    var masker = new VanillaMasker();
    expect(masker.toCPF('1011')).toEqual('101.1');
  });

});
