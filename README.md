# VanillaMasker

VanillaMasker is a pure javascript input mask.  
Now you can use a simple and pure javascript lib to mask your input elements.

## How to use

Install it

``` html
<script src="build/vanilla-masker.min.js"></script>
```

And given these simple inputs tag
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

// Masking an all input elements to money.
masker.maskMoney(document.querySelectorAll("input"));
```

## TODO

* Add to GitHub Pages;
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
