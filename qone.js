
// CV needs to get multiply answer and then *'s by the number'


class Mulitiplier {
	constructor(number) {
		this.number = number;
		this.currentValue = 1;
	}

	multiply() {
		this.currentValue = this.number * this.currentValue;
	}

	getCurrentValue() {
		return this.currentValue;
	}
}

var hot = new Mulitiplier(4);
hot.multiply();
console.log(hot.getCurrentValue());

hot.multiply();
console.log(hot.getCurrentValue());

hot.multiply();
console.log(hot.getCurrentValue());

hot.multiply();
console.log(hot.getCurrentValue());








