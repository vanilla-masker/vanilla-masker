describe("VanillaMasker.maskDate", function() {

  it('console log "The element is null." if the element is undefined', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskDate(undefined);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

  it('console log "The element is null." if the element is null', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskDate(null);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

  it('console log "The element is null." if the element is []', function() {
    spyOn(console, 'log');
    new VanillaMasker().maskDate([]);
    expect(console.log).toHaveBeenCalledWith('The element is null.');
  });

});

describe("VanillaMasker.toDate", function() {

  it('returns "12/12/2000" number when input is 12122000', function() {
    var masker = new VanillaMasker();
    expect(masker.toDate(12122000)).toEqual('12/12/2000');
  });

  it('returns "10/11" number when input is 1011', function() {
    var masker = new VanillaMasker();
    expect(masker.toDate('1011')).toEqual('10/11');
  });

  it('returns "2000/12/12" number when input is 20001212', function() {
    var masker = new VanillaMasker({date: "9999/99/99"});
    expect(masker.toDate('20001212')).toEqual('2000/12/12');
  });

});
