# Index.html

## Introduction
When loading your application, load times are important.
Here are some general rules to follow.

## Dictionary
### Autonomous custom elements
These are custom standalone elements and the tag name represents that element.
```html
<my-element></my-element>
```

### Customized built-in elements
These elements use standard html markup but uses the is attribute to define it's behaviour.
```html
<button is="action-button"></button>
```

## Index.html Rules

1. The index.html file should contain a styles element that styles non critical elements.
This may include things like the initial container layout, html and body sizes.
1. Use header element for headers
1. Use a div with role="main" for the body
1. Use footer element for footer
1. Scripts should be loaded either defered or async

The index.html file should fully load and render with out script requirements.

## App toolbars and header
Application toolbars should be located in the header element.
The application toolbar should use the header toolbar with a custom built-in element.

```html
<header is="app-toolbar">
    <h1>Title</h1>
    <button id="name">Click Me</button>
</header>
```

## Loading scripts
Scripts should be right at the bottom of the page.
This allows the loading of the html first, kicking off the render operations and as a last act, load the scripts.
This means that custom elements will be styled and rendered, but only loaded after the render has taken place.
This provides you with a faster load time.

## Components
When there is a html element that you want to extend the functionality of use the custom build-in element strategy.
If there is no html element that can be used create a custom element.

All custom elements should be accessible.