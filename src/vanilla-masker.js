(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else {
    // Browser globals.
    root.VanillaMasker = factory();
  }
}(this, function() {
  var DIGIT = "9", ALPHA = "A";

  var VanillaMasker = function(opts) {
    opts = opts || {};
    this.opts = {
      precision: opts.hasOwnProperty("precision") ? opts.precision : 2,
      separator: opts.separator || ",",
      delimiter: opts.delimiter || ".",
      unit: opts.unit && (opts.unit + " ") || "",
      zeroCents: opts.zeroCents
    };
    this.lastOutput = "";
    this.moneyPrecision = opts.zeroCents ? 0 : this.opts.precision;
  };

  VanillaMasker.prototype.bindElementToMask = function(el, maskFunction, params) {
    try {
      var that = this,
          elements = el.length ? el : [el],
          onType = function(e) {
            if (e.target) {
              e.target.value = that[maskFunction](e.target.value, params);
            } else {
              e.srcElement.value = that[maskFunction](e.srcElement.value, params);
            }
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
      console.log("There is no element to bind.");
    }
  };

  VanillaMasker.prototype.maskMoney = function(el) {
    this.bindElementToMask(el, "toMoney");
  };

  VanillaMasker.prototype.toMoney = function(value) {
    if (this.opts.zeroCents) {
      var zeroMatcher = ("("+ this.opts.separator +"[0]{0,"+ this.opts.precision +"})"),
          zeroRegExp = new RegExp(zeroMatcher, "g"),
          initialInputLength = value.length || 0
      ;
      value = value.toString().replace(zeroRegExp, "");
      if (initialInputLength < this.lastOutput.length) {
        value = value.slice(0, value.length - 1);
      }
    }
    var number = value.toString().replace(/[\D]/g, ""),
        clearDelimiter = new RegExp("^(0|\\"+ this.opts.delimiter +")"),
        clearSeparator = new RegExp("(\\"+ this.opts.separator +")$"),
        money = number.substr(0, number.length - this.moneyPrecision),
        masked = money.substr(0, money.length % 3),
        cents = new Array(this.opts.precision + 1).join("0")
    ;
    money = money.substr(money.length % 3, money.length);
    for (var i = 0, len = money.length; i < len; i++) {
      if (i % 3 === 0) {
        masked += this.opts.delimiter;
      }
      masked += money[i];
    }
    masked = masked.replace(clearDelimiter, "");
    masked = masked.length ? masked : "0";
    if (!this.opts.zeroCents) {
      var beginCents = number.length - this.opts.precision,
          centsValue = number.substr(beginCents, this.opts.precision),
          centsLength = centsValue.length,
          centsSliced = (this.opts.precision > centsLength) ? this.opts.precision : centsLength
      ;
      cents = (cents + centsValue).slice(-centsSliced);
    }
    var output = (this.opts.unit + masked + this.opts.separator + cents);
    this.lastOutput = output = output.replace(clearSeparator, "");
    return output;
  };

  VanillaMasker.prototype.maskNumber = function(el) {
    this.bindElementToMask(el, "toNumber");
  };

  VanillaMasker.prototype.toNumber = function(value) {
    return value.toString().replace(/[\D]/g, "");
  };

  VanillaMasker.prototype.maskPattern = function(el, pattern) {
    this.bindElementToMask(el, "toPattern", pattern);
  };

  VanillaMasker.prototype.toPattern = function(value, pattern) {
    var output = pattern.split(""),
        values = value.toString().replace(/[^0-9a-zA-Z]/g, ""),
        index = 0,
        i
    ;
    for (i = 0; i < output.length; i++) {
      if (index >= values.length) {
        break;
      }
      if ((output[i] === DIGIT && values[index].match(/[0-9]/)) ||
          (output[i] === ALPHA && values[index].match(/[a-zA-Z]/))) {
        output[i] = values[index++];
      } else if (output[i] === DIGIT || output[i] === ALPHA) {
        output = output.slice(0, i);
      }
    }
    return output.join("").substr(0, i);
  };

  // Return a value to define the module export.
  return VanillaMasker;
}));
