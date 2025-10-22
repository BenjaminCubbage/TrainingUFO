export class NECLabelledDatum {
    value;
    label;

    constructor (value, label = undefined) {
        this.value = value;
        this.label = label || value;
    }

    toString() {
        return "$KEY___" + this.value;
    }
}