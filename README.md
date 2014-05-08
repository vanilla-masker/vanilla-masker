# VanillaMasker

A pure javascript input mask.  
Now you can use a simple and pure javascript lib to mask your HTMLInputElement.

## How to use

Download the lib [minified version (532 bytes)](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/build/vanilla-masker.min.js) or [gzipped version (509 bytes)](https://raw.githubusercontent.com/BankFacil/vanilla-masker/master/build/vanilla-masker.min.gz.js)

Include it into your html page:
``` html
<script src="vanilla-masker.min.js"></script>
```

And given these simple inputs tag:
``` html
<input type="text">
<input type="text">
<input type="text">
```

You can use the code below...
``` javascript
// Instancing the VanillaMasker object
var masker = new VanillaMasker({
  precision: 2,
  separator: ',',
  delimiter: '.',
  unit: 'R$'
});

// Masking an input element to money.
masker.maskMoney(document.querySelector("input"));

// Or masking an all input elements to money.
masker.maskMoney(document.querySelectorAll("input"));
```

## How to run localhost

* Install node.js - http://nodejs.org/download
* Clone this repository - `git clone git@github.com:BankFacil/vanilla-masker.git`
* Install Grunt - `npm install -g grunt-cli`
* Install Grunt dependencies - `cd vanilla-masker && npm install`
* Running development mode - `grunt dev`
* Open the browser - http://localhost:4500

## Run test

* Run the command: `grunt test`

## Build project

* Run the command: `grunt build`

## TODO

* Mask custom inputs methods, like maskPhone, maskNumber, maskZipCode, etc;
* Bower compatibility;
* AMD support;
* Mobile support;
* JSHint task;

## Contributors

Caio Ribeiro Pereira - caio.ribeiro.pereira@gmail.com  
Leandro Alvares da Costa - leandroadacosta@gmail.com

## License

MIT License: http://bankfacil.mit-license.org
