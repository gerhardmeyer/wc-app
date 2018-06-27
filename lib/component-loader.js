export async function loadComponent(path, templated) {
    loadScript(`${path}.js`);

    if (templated == true) {
        loadTemplates(`${path}.html`);
    }
}

async function loadScript(path) {
    const script = document.createElement("script");
    script.async = true;
    script.src = path;
    script.type = "module";
    document.head.appendChild(script);
}

async function loadTemplates(path) {
    const result = await fetch(path).then(result => result.text());

    const tdoc = document.createElement("template");
    tdoc.innerHTML = result;

    const templates = tdoc.content.querySelectorAll("template");
    for (let template of templates) {
        window.templates.set(template.id, template.content);
    }
}