const range = (start, stop, step) => Array
    .from({ length: (stop - start) / step + 1 }, (_, i) => [start + (i * step), start + (i * step + 1)]);

const isleft = (id) => {
    const left = range(0, 28, 2).filter((_, idx) => ((idx) % 2) === 0);
    let test = [];
    test = left.find(e => e.includes(id));
    return (test !== undefined)
}
export default isleft;