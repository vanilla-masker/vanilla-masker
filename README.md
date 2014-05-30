# What's this

[![Build Status](https://travis-ci.org/BankFacil/vanilla-masker.svg)](https://travis-ci.org/BankFacil/vanilla-masker)
[![Code Climate](https://codeclimate.com/github/BankFacil/vanilla-masker.png)](https://codeclimate.com/github/BankFacil/vanilla-masker)

It's a pure JavaScript input mask.  
Now you can use a simple and pure javascript lib to mask html elements.  
Fuck jQuery, Zepto and any others javascript frameworks!

Let's live now in a lightweight client-side world using VanillaMasker.  
This is a cross-browser and cross-device lib for desktop and responsible sites.

The [demo page](http://bankfacil.github.io/vanilla-masker/demo.html).

# How to use

Download the lib: 
* [development version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/src/vanilla-masker.js) (4.83 Kbytes);
* [minified version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/build/vanilla-masker.min.js) (2.59 Kbytes);
* [gzipped version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/build/vanilla-masker.min.gz.js) (1020 bytes);

Or install it using [Bower](http://bower.io): `bower install --save vanilla-masker`

Include it into your html page:
``` html
<script src="vanilla-masker.min.js"></script>
```

And given these simple inputs tag:
``` html
<input type="text">
```

You can use the code below...
``` javascript
// Constructor
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
  zeroCents: true,
  // Phone format
  phone: '(99) 9999-9999',
  // Date format
  date: '99/99/9999'
});

// Functions
// Listen the input element masking it to money.
masker.maskMoney(document.querySelector("input"));

// Listen array of input elements masking it to money.
masker.maskMoney(document.querySelectorAll("input"));

// Converts number to money string
masker.toMoney(1234); // -> R$ 1.234,00

// Listen the input element masking it to number.
masker.maskNumber(document.querySelector("input"));

// Converts any string to number 
masker.toNumber("123ac34"); // -> 12334

// Listen the input element masking it to format with pattern.
masker.maskPattern(document.querySelector("input"), "(99) 9999-9999");

// Converts value to masked phone
masker.toPattern(1099911111, "(99) 9999-9999"); // -> (10) 9991-1111
// Converts value to masked date
masker.toPattern(12122000, "99/99/9999"); // -> 12/12/2000
// Converts value to masked document
masker.toPattern(99911111101, "999.999.999-99"); // -> 999.111.111-01
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

* AMD support;
* Beautify Demo Page;

# Compatibility

Desktop browsers:

* Chrome
* Firefox
* Safari
* Opera
* Internet Explorer 9+ (coming soon IE8 support)

Mobile browsers:

* Android (2.2+) native browsers
* Chrome mobile
* Dolphin
* Opera mobile (not tested yet)
* iOS

# Contributors

Caio Ribeiro Pereira - caio.ribeiro.pereira@gmail.com  
Leandro Alvares da Costa - leandroadacosta@gmail.com  
Henrique Antonini Silvério - contato@henriquesilverio.com

# License

MIT License: http://bankfacil.mit-license.org

# Powered by

Bankfacil: http://www.bankfacil.com.br  
