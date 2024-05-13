export const div = function (parent, attributes) {
    return createElement('div', parent, attributes);
}

export const img = function (parent, attributes) {
    return createElement('img', parent, attributes);
}

export const p = function (parent, attributes) {
    return createElement('p', parent, attributes);
}

export const input = function (parent, attributes) {
    return createElement('input', parent, attributes);
}

export const button = function (parent, attributes) {
    return createElement('button', parent, attributes);
}

export const i = function (parent, attributes) {
    return createElement('i', parent, attributes);
}

export const a = function (parent, attributes) {
    return createElement('a', parent, attributes);
}

const createElement = function (type, parent, attributes) {
    let element = document.createElement(type);
    parent.appendChild(element);

    if (attributes != null)
        for (const attribute in attributes) {
            element[attribute] = attributes[attribute]
        }
    return element;
}