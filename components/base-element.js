export class BaseElement extends HTMLElement {
    connectedCallback() {
        this.events = [];
    }

    disconnectedCallback() {
        for (let event of this.events) {
            event.element.removeEventListener(event.event, event.callback);
            event.element = null;
            event.event = null;
            event.callback = null;
        }
        this.events = null;
    }

    registerEvent(element, event, callback) {
        element.addEventListener(event, callback);
        this.events.push({
            element: element,
            event:  event,
            callback: callback
        })
    }
}