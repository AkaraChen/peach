type Input = string | Record<string, any>

/**
 * Inspired bt clsx
 */
function argsx(...inputs: Array<Input | Input[]>): string[] {
    const result: string[] = [];
    for (const input of inputs) {
        if (typeof input === 'string') {
            result.push(input);
        } else if (Array.isArray(input)) {
            result.push(...argsx(input));
        } else {
            const keys = Object.keys(input);
            for (const key of keys) {
                const value = input[key];
                if (value) result.push(key);
            }
        }
    }
    return result;
}

export default argsx;
