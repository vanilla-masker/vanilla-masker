# What's this

[![Build Status](https://travis-ci.org/BankFacil/vanilla-masker.svg)](https://travis-ci.org/BankFacil/vanilla-masker)
[![Code Climate](https://codeclimate.com/github/BankFacil/vanilla-masker.png)](https://codeclimate.com/github/BankFacil/vanilla-masker)

It's a pure JavaScript mask input.  
Now you can use a simple and pure javascript lib to mask your input elements, without need to load jQuery or Zepto to do it.
By the way fuck jQuery, Zepto or any others javascript frameworks!

Let's live a lightweight client-side world using VanillaMasker.  
Don't worry about where this will work, because this is a cross-browser and cross-device library. And if you find any bug, please let us know about it [reporting an issue](https://github.com/BankFacil/vanilla-masker/issues).

If you wanna see how this lib works, [click here to test this demo page](http://bankfacil.github.io/vanilla-masker/demo.html).

# How to install

You can download the lib: 
* [development version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/src/vanilla-masker.js) (4.43 Kbytes);
* [minified version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/build/vanilla-masker.min.js) (2.28 Kbytes);
* [gzipped version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/build/vanilla-masker.min.gz.js) (946 bytes);

Please, this lib don't have CDN yet, so you need to download and put it in your own site. 

You can install it via bower too, using this command: `bower install --save vanilla-masker`

# How to use

### Loading the lib

Like I said, you need to download and put this lib in your own site, using this tag below:

``` html
<html>
   <head>
      <!-- Loading the vanilla-masker lib -->
      <script src="vanilla-masker.min.js"></script>
   </head>
   <body>
      <input type="text">
   </body>
</html>
```

### Using the lib
#### Constructor

``` javascript
// Input number example: 1234567890
var masker = new VanillaMasker({
  // Decimal precision -> "90"
  precision: 2, 
  // Decimal separator -> ",90"
  separator: ',', 
  // Number delimiter -> "12.345.678"
  delimiter: '.', 
  // Money unit -> "R$ 12.345.678,90"
  unit: 'R$', 
  // Force type only number instead decimal,
  // masking decimals with ",00"
  // Zero cents -> "R$ 1.234.567.890,00"
  zeroCents: true
});
```

#### Masking to money format

``` javascript
// Listen the input element masking it to money.
masker.maskMoney(document.querySelector("input"));

// Listen array of input elements masking it to money.
masker.maskMoney(document.querySelectorAll("input"));

// Converts number to money string
masker.toMoney(1234); // -> R$ 1.234,00
```

#### Masking only numbers

``` javascript
// Listen the input element masking it to number.
masker.maskNumber(document.querySelector("input"));

// Converts any string to number 
masker.toNumber("123ac34"); // -> 12334
```

#### Masking custom pattern

``` javascript
// Listen the input element masking it to format with pattern.
masker.maskPattern(document.querySelector("input"), "(99) 9999-9999");

// Converts value to masked phone
masker.toPattern(1099911111, "(99) 9999-9999"); // -> (10) 9991-1111
// Converts value to masked date
masker.toPattern(12122000, "99/99/9999"); // -> 12/12/2000
// Converts value to masked document
masker.toPattern(99911111101, "999.999.999-99"); // -> 999.111.111-01
// Converts value to masked car plate
masker.toPattern('ABC1234', "AAA-9999"); // -> ABC-1234
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

# Contributors

Caio Ribeiro Pereira - caio.ribeiro.pereira@gmail.com  
Leandro Alvares da Costa - leandroadacosta@gmail.com  
Henrique Antonini Silvério - contato@henriquesilverio.com

# Changelog

## 0.3.0

* Accepting elements from mask function
* Changed maskPhone, maskCPF, maskCNPJ and maskDate to maskPattern function
* Added toPattern function
* Fixed maskPattern when types pattern "A" in a mask which has only pattern "9"
* Internet Explorer 8 support
* Added AMD support (only client-side)

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
