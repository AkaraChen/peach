import ora, { Options } from 'ora';
import { config } from '../config';

export const spin = (options?: Options) => {
    return ora({
        discardStdin: !config.exitOnCancel,
        hideCursor: !config.exitOnCancel,
        text: 'Loading...\n',
        ...options
    });
};
