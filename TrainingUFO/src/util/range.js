export function range(from, to) {
    if (to <= from) 
        return [];

    return Array.from({ length: to - from}, (_, i) => from + i);
}