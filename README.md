# What's this

[![Build Status](https://travis-ci.org/BankFacil/vanilla-masker.svg)](https://travis-ci.org/BankFacil/vanilla-masker)
[![Code Climate](https://codeclimate.com/github/BankFacil/vanilla-masker.png)](https://codeclimate.com/github/BankFacil/vanilla-masker)

Now you can use a simple and pure javascript lib to mask html elements. Fuck jQuery, Zepto and any others javascript frameworks!

Let's live now in a lightweight client-side world using VanillaMasker.  
This is a cross-browser and cross-device lib for desktop and responsible sites.

The [demo page](http://bankfacil.github.io/vanilla-masker/demo.html).

# How to use

Download the lib: 
* [development version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/build/vanilla-masker.js) (4.41 Kbytes);
* [minified version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/build/vanilla-masker.min.js) (1.96 Kbytes);
* [gzipped version](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/build/vanilla-masker.min.gz.js) (751 bytes);

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
// Input number example: 1234567
var masker = new VanillaMasker({
  // Decimal precision -> "67"
  precision: 2, 
  // Decimal separator -> ",67"
  separator: ',', 
  // Number delimiter -> "123.45"
  delimiter: '.', 
  // Money unit -> "R$ 12.345,67"
  unit: 'R$', 
  // Force type only number instead decimal,
  // masking decimals with ",00"
  // Zero cents -> "R$ 1.234.567,00"
  zeroCents: true 
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

* Mask custom inputs methods, like maskPhone, maskZipCode, etc;
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

# License

MIT License: http://bankfacil.mit-license.org

# Powered by

Bankfacil: http://www.bankfacil.com.br  
