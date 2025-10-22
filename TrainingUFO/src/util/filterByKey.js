export function filterByKey(obj, fn) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => fn(key)));
}

export function filterByKeyRegex(obj, regex) {
    return filterByKey(obj, k => regex.test(k));
}