## 1.2.0 - 31/05/2017

* Add support for negative values - [#119](https://github.com/vanilla-masker/vanilla-masker/pull/40)

## 1.1.1 - 16/02/2017

* Fixed gz output file
* Converted package.json dependencies into devDependencies

## 1.1.0 - 13/08/2015

* Improved demo page layout - [See this pull request](https://github.com/vanilla-masker/vanilla-masker/pull/40)
* Fixed bower.json - [See this pull request](https://github.com/vanilla-masker/vanilla-masker/pull/43)
* When backspace is pressed the pattern is kept - [See this pull request](https://github.com/vanilla-masker/vanilla-masker/pull/47)
* Enabled sauce-labs on Travis - [See this pull request](https://github.com/vanilla-masker/vanilla-masker/pull/44)

## 1.0.9 - 07/04/2015

* Added optional placeholder feature for patterns - [See this pull request](https://github.com/vanilla-masker/vanilla-masker/pull/35)

## 1.0.8 - 27/01/2015

* Bug fix #29 - [See this pull request](https://github.com/vanilla-masker/vanilla-masker/pull/29)

## 1.0.7 - 26/01/2015

* Bug fix #28 - [See this issue](https://github.com/vanilla-masker/vanilla-masker/issues/28)

## 1.0.6 - 19/12/2014

* Bug fix #26 - [See this pull request](https://github.com/vanilla-masker/vanilla-masker/pull/26)
* Bug fix #24 - [See this pull request](https://github.com/vanilla-masker/vanilla-masker/pull/24)

## 1.0.5 - 06/12/2014

* Bug fix - [See this pull request](https://github.com/vanilla-masker/vanilla-masker/pull/19)

## 1.0.4 - 02/12/2014

* Added `unbindElementToMask()` function.
* Added `unMask()` function.

## 1.0.3 - 29/10/2014

* Added pattern "S" to support alphanumerics.

## 1.0.2 - 25/09/2014

* Added Meteor Package support.

## 1.0.1 - 19/09/2014

* Fix VMasker factory when element is empty array.

## 1.0.0 - 14/09/2014

* Added VMasker factory as default.
* Fix Windows Phone compatibility.

## 0.3.3

* Fix ignore setSelectionRange cursor for IE8.
* Fix ZeroCents behavior for maskMoney.
* Fix last output state for single element.
* Fix Bower main file.

## 0.3.2

* Added suffixUnit support for maskMoney.

## 0.3.1

* Fix mask when input has values.
* Fix cursor navigation.
* Fix delete char at specific position.

## 0.3.0

* Accepting elements from mask function
* Changed maskPhone, maskCPF, maskCNPJ and maskDate to maskPattern function
* Added toPattern function
* Fixed maskPattern when types pattern "A" in a mask which has only pattern "9"
* Internet Explorer 8 support
* Added AMD support (only client-side)
* maskNumber function accepts negative numbers

## 0.2.0

* Added zeroCents to maskMoney function
* Added maskPhone, maskCPF, maskCNPJ and maskDate function
* Added bindElementToMask function

## 0.1.0

* Added maskMoney
* Added Bower support
* Added Demo page
* Added JSHint
* Mobile browser support
* Added Grunt build
* Added Travis-CI
* Added CodeClimate
