import {BaseElement} from "./../base-element.js";

class AppToolbar extends BaseElement {
    connectedCallback() {
        super.connectedCallback();
        this.registerEvent(this.querySelector("#buttonA"), "click", this.aClick.bind(this));
        this.registerEvent(this.querySelector("#buttonB"), "click", this.bClick.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    aClick() {
        console.log("A was clicked");
    }

    bClick() {
        const header = document.querySelector("header");
        header.parentElement.removeChild(header);
    }
}

customElements.define("app-toolbar", AppToolbar, {extends: "header"});