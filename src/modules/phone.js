(function() {

  VanillaMasker.prototype.maskPhone = function(el) {
    try {
      var that = this
        , elSliced = [].slice.call(el)
        , elements = elSliced.length ? elSliced : [el]
        , onType = function(e) {
          e.target.value = that.toPhone(e.target.value);
        }
      ;
      for (var i = 0, len = elements.length; i < len; i++) {
        if (elements[i].addEventListener) {
          elements[i].addEventListener("keyup", onType);
          elements[i].addEventListener("keydown", onType);
        } else {
          elements[i].attachEvent("onkeyup", onType);
          elements[i].attachEvent("onkeydown", onType);
        }
      }
    } catch(e) {
      console.log("The element is null.");
    }
  };

  VanillaMasker.prototype.toPhone = function(input) {
    var data = input.replace(/[\W]/g, "")
      , dataLength = data.length
      , phoneLength = this.opts.phone.length
      , output = ''
    ;
    for (var i = 0, d = 0; i < phoneLength; i++) {
      var dataChar = data.charAt(d)
        , phoneChar = this.opts.phone.charAt(i)
      ;
      if ((dataChar.match(/[\d]/) && phoneChar === this.DIGIT) ||
          (dataChar.match(/[a-zA-Z]/) && phoneChar === this.ALPHA)) {
        
      }
    }
    return output;
  };

})();
