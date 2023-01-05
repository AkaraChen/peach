/**
 * Inspired bt clsx
 */
function argsx(...inputs: any[]): string[] {
    const result: string[] = [];
    for (const input of inputs) {
        if (typeof input === 'string') {
            result.push(input);
        } else {
            for (const key in input) {
                if (Object.prototype.hasOwnProperty.call(input, key)) {
                    const value = input[key];
                    if (value) result.push(key);
                }
            }
        }
    }
    return result;
}

export default argsx;
