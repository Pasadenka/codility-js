function solution(a) {
    let count = 0;
    let currentNumber;
    for (let el of a.sort()) {
        if (currentNumber === el) {
            count++;
        } else if (count === 1) {
            count = 0;
            break;
        } else {
            currentNumber = el;
            count = 1;
        }
    }

    return count === 0 ? currentNumber : -1;
}

module.exports = solution;

solution([9,3,9,3,9,7,9])