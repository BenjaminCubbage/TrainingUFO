export function cssVar(name, target = null) {
    return window.getComputedStyle(target ?? document.documentElement).getPropertyValue(name);
}

export function setCSSVar(name, value, target = null) {
    (target ?? document.documentElement).style.setProperty(name, value);
}