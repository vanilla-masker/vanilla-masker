(function() {

  var DIGIT = "9", ALPHA = "A", WILDCARD = "?";

  var VanillaMasker = function(opts) {
    opts = opts || {};
    this.opts = {
      precision: opts.hasOwnProperty("precision") ? opts.precision : 2,
      separator: opts.separator || ",",
      delimiter: opts.delimiter || ".",
      unit: opts.unit && (opts.unit + " ") || "",
      zeroCents: opts.zeroCents,
      phone: opts.phone || "(99) 9999-9999"
    };
    this.lastOutput = "";
    this.moneyPrecision = opts.zeroCents ? 0 : this.opts.precision;
  };

  VanillaMasker.prototype.maskElement = function(el, maskFunction) {
    try {
      var that = this
        , elSliced = [].slice.call(el)
        , elements = elSliced.length ? elSliced : [el]
        , onType = function(e) {
          e.target.value = that[maskFunction](e.target.value);
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

  VanillaMasker.prototype.maskMoney = function(el) {
    this.maskElement(el, "toMoney");
  };

  VanillaMasker.prototype.toMoney = function(input) {
    var precision = this.opts.precision
      , separator = this.opts.separator
      , delimiter = this.opts.delimiter
      , unit = this.opts.unit
    ;
    if (this.opts.zeroCents) {
      var zeroMatcher = ("("+ separator +"[0]{0,"+ precision +"})")
        , zeroRegExp = new RegExp(zeroMatcher, "g")
        , initialInputLength = input.length || 0
      ;
      input = input.toString().replace(zeroRegExp, "");
      if (initialInputLength < this.lastOutput.length) {
        input = input.slice(0, input.length - 1);
      }
    }
    var number = input.toString().replace(/[\D]/g, "")
      , clearDelimiter = new RegExp("^(0|\\"+ delimiter +")")
      , clearSeparator = new RegExp("(\\"+ separator +")$")
      , money = number.substr(0, number.length - this.moneyPrecision)
      , masked = money.substr(0, money.length % 3)
      , cents = new Array(precision + 1).join("0")
    ;
    money = money.substr(money.length % 3, money.length);
    for (var i = 0, len = money.length; i < len; i++) {
      if (i % 3 === 0) {
        masked += delimiter;
      }
      masked += money[i];
    }
    masked = masked.replace(clearDelimiter, "");
    masked = masked.length ? masked : "0";
    if (!this.opts.zeroCents) {
      var beginCents = number.length - precision;
      var centsValue = number.substr(beginCents, precision);
      var centsLength = centsValue.length;
      var centsSliced = (precision > centsLength) ? precision : centsLength;
      cents = (cents + centsValue).slice(-centsSliced);
    }
    var output = (unit + masked + separator + cents);
    this.lastOutput = output = output.replace(clearSeparator, "");
    return output;
  };

  VanillaMasker.prototype.maskNumber = function(el) {
    this.maskElement(el, "toNumber");
  };

  VanillaMasker.prototype.toNumber = function(input) {
    return input.toString().replace(/[\D]/g, "");
  };

  VanillaMasker.prototype.maskPhone = function(el) {
    this.maskElement(el, "toPhone");
  };

  VanillaMasker.prototype.toPhone = function(input) {
    var output = this.opts.phone.split("")
      , values = input.toString().replace(/[^0-9a-zA-Z]/g, "")
      , index = 0, i = 0
    ;
    for (var len = output.length; i < len; i++) {
      if (index >= values.length) break;
      if ((output[i] === DIGIT && values[index].match(/[0-9]/)) ||
          (output[i] === ALPHA && values[index].match(/[a-zA-Z]/))) {
        output[i] = values[index];
        index++;
      }
    }
    return output.join("").substr(0, i);
  };

  window.VanillaMasker = VanillaMasker;

})();
