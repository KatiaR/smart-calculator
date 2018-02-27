class SmartCalculator {
    constructor(initialValue) {
        this.value = `${initialValue}`;
    }

    add(number) {
        this.value += `+${number}`;
        return this
    }

    subtract(number) {
        this.value += `-${number}`;
        return this
    }

    multiply(number) {
        this.value += `*${number}`;
        return this
    }

    devide(number) {
        this.value += `/${number}`;
        return this
    }

    pow(number) {
        this.value += `**${number}`;
        return this
    }

    toString() {
        return eval(this.value);
    }
}

module.exports = SmartCalculator;
