# What's this

[![Build Status](https://travis-ci.org/BankFacil/vanilla-masker.svg)](https://travis-ci.org/BankFacil/vanilla-masker)
[![Code Climate](https://codeclimate.com/github/BankFacil/vanilla-masker.png)](https://codeclimate.com/github/BankFacil/vanilla-masker)

It's a pure JavaScript mask input.  
Now you can use a simple and pure javascript lib to mask your input elements, without need to load jQuery or Zepto to do it.
By the way fuck jQuery, Zepto or any others javascript frameworks!

Let's live a lightweight client-side world using VanillaMasker.  
Don't worry about where this will work, because this is a cross-browser and cross-device library. And if you find any bug, please let us know about it [reporting an issue](https://github.com/BankFacil/vanilla-masker/issues).

If you wanna see how this lib works, click to test this [demo page](http://bankfacil.github.io/vanilla-masker/demo.html).

# How to install

You can download the lib: 
* [development version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/src/vanilla-masker.js) (5.5 Kbytes);
* [minified version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/build/vanilla-masker.min.js) (2.9 Kbytes);
* [gzipped version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/build/vanilla-masker.min.gz.js) (1.2 Kbytes);

Please, this lib don't have CDN yet, so you need to download and put it in your own site. 

You can install it via bower too, using this command: `bower install --save vanilla-masker`

# How to use

### Loading the lib

Like I said, you need to download and put this lib in your own site, using this tag below:

``` html
<html>
   <head></head>
   <body>
      <input type="text">
      <!-- Loading the vanilla-masker lib -->
      <script src="vanilla-masker.min.js"></script>
   </body>
</html>
```

### Using the lib

#### Money format

``` javascript

// Masking input element to money.
VMasker(document.querySelector("data-js-input")).maskMoney();

// Masking input element to money with options.
VMasker(document.querySelector("data-js-input")).maskMoney({
  // Decimal precision -> "90"
  precision: 2, 
  // Decimal separator -> ",90"
  separator: ',', 
  // Number delimiter -> "12.345.678"
  delimiter: '.', 
  // Money unit -> "R$ 12.345.678,90"
  unit: 'R$', 
  // Money unit -> "12.345.678,90 R$"
  suffixUnit: 'R$', 
  // Force type only number instead decimal,
  // masking decimals with ",00"
  // Zero cents -> "R$ 1.234.567.890,00"
  zeroCents: true
});

// Masking an array of input elements to money.
VMasker(document.querySelectorAll("data-js-input")).maskMoney();

// Converts number to money string
VMasker.toMoney(1234); // -> R$ 1.234,00
```

#### Only numbers

``` javascript
// Masking input element to number.
VMasker(document.querySelector("data-js-input")).maskNumber();

// Converts any string to number 
VMasker.toNumber("123ac34"); // -> 12334
VMasker.toNumber("-123ac34"); // -> -12334
```

#### Masking custom pattern

``` javascript
// Listen the input element masking it to format with pattern.
VMasker(document.querySelector("input")).maskPattern("(99) 9999-9999");

// Converts value to masked phone
VMasker.toPattern(1099911111, "(99) 9999-9999"); // -> (10) 9991-1111
// Converts value to masked date
VMasker.toPattern(12122000, "99/99/9999"); // -> 12/12/2000
// Converts value to masked document
VMasker.toPattern(99911111101, "999.999.999-99"); // -> 999.111.111-01
// Converts value to masked car plate
VMasker.toPattern('ABC1234', "AAA-9999"); // -> ABC-1234
```

# How to run localhost

* Install node.js - http://nodejs.org/download
* Clone this repository - `git clone git@github.com:BankFacil/vanilla-masker.git`
* Install Grunt - `npm install -g grunt-cli`
* Install Grunt dependencies - `cd vanilla-masker && npm install`
* Running development mode - `grunt dev`
* Open the browser - http://localhost:4500

# Run test

* Run the command: `grunt test`

# Build project

* Run the command: `grunt build`

# TODO - we need pull requests :]

* Test Opera mini browser;
* Beautify Demo Page;

# Compatibility

Desktop browsers:

* Chrome 4.0+
* Firefox 2.0+
* Safari 4.0+
* Opera 10.0+
* Internet Explorer 8+

Mobile browsers:

* Android browser 2.2+
* Chrome mobile 35.0+
* Firefox mobile 29.0+
* Opera mobile 10.0+
* iOS Safari 3.2+
* Windows Phone

# Contributors

Caio Ribeiro Pereira - caio.ribeiro.pereira@gmail.com  
Leandro Alvares da Costa - leandroadacosta@gmail.com  
Henrique Antonini Silvério - contato@henriquesilverio.com

# Changelog

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

# License

MIT License: http://bankfacil.mit-license.org

# Powered by

Bankfacil: http://www.bankfacil.com.br  
