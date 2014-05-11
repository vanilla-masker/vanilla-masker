(function() {

	VanillaMasker.prototype.maskNumber = function(el) {
		var that = this
			, elSliced = [].slice.call(el)
			, elements = elSliced.length ? elSliced : [el]
			, onType = function(e) {
				e.target.value = that.toNumber(e.target.value);
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
	};

	VanillaMasker.prototype.toNumber = function(input) {
		return input.toString().replace(/[\D]/g, '');
	};

})();