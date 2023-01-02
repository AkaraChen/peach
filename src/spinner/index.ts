import ora, { Options } from 'ora';

export const spin = (options?: Options) => {
    return ora({
        discardStdin: false,
        hideCursor: false,
        text: 'Loading...\n',
        ...options
    });
};
