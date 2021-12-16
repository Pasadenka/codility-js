function solution(n) {
    if (typeof n !== 'number' || n < 1) return 0;
    
    const binary = Number(n).toString(2);
    let position = 0;
    let gap = 0;

    while (position != -1) {
        const index = binary.indexOf('1', position);

        if (index - position > gap)
            gap = index - position;
            
        position = index === -1 ? index : index+1;
    }

    return gap;
}

module.exports = solution;