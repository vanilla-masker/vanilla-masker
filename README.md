# VanillaMasker

VanillaMasker is a pure javascript input masker.

Now you can use a simple and pure javascript lib to masker your input elements.

## How to use

``` javascript
// Instancing the VanillaMasker object
var masker = new VanillaMasker({
	precision: 2,
	separator: ',',
	delimiter: '.',
  unit: 'R$'
});

// Masking a string or number to money
masker.maskMoney(10000); // -> 'R$ 10.000,00'

// Masking an input element to accept only numbers, masking it to money.
var input = document.querySelector("input");
masker.maskMoneyElement(input);
```

## TODO

* Write full api documentation here;
* mask custom inputs, like phone numbers, zip codes...;
* Bower compatibility;
* AMD support;
* Mobile support;

## Contributors

Caio R. Pereira - caio.ribeiro.pereira@gmail.com

## License

MIT License: http://bankfacil.mit-license.org
