class custompagecustomization extends HTMLElement {
    constructor() {
        super();
        this.sliderrange();

    }
    sliderrange() {
        this.slider = document.getElementById("slider");
        this.inchesButton = document.getElementById("inches-button");
        this.centimetersButton = document.getElementById("centimeters-button");
        this.unitValue = document.getElementById("unit-value");

        this.unit = localStorage.getItem("unit") || "inches";
        this.value = localStorage.getItem("value") || 0;
        this.originalValue = localStorage.getItem("originalValue") || 0;

        this.inchesButton.addEventListener("click", () => {
            this.unit = "inches";
            localStorage.setItem("unit", this.unit);
            this.updateUnitValue();
        });

        this.centimetersButton.addEventListener("click", () => {
            this.unit = "centimeters";
            localStorage.setItem("unit", this.unit);
            this.updateUnitValue();
        });

        this.slider.addEventListener("input", () => {
            this.originalValue = this.slider.value;
            localStorage.setItem("originalValue", this.originalValue);
            this.updateUnitValue();
        });
    }
    updateUnitValue() {
        this.value = this.originalValue;
        if (this.unit === "centimeters") {
            this.value = this.originalValue * 2.54;
        }
        this.unitValue.value = `${this.value} ${this.unit}`;
        localStorage.setItem("value", this.value);
    }
}
customElements.define('custom-page-customization', custompagecustomization);