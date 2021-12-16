function solution(a, k) {
    const sliceIndex = a.length - k % a.length;
    return a.slice(sliceIndex).concat(a.slice(0,sliceIndex));
}

module.exports = solution;