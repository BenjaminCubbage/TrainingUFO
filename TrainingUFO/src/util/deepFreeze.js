export function deepFreeze(o) {
    Object.values(o).forEach(v => Object.isFrozen(v) || deepFreeze(v));
    return Object.freeze(o);
}