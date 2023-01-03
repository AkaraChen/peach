import ora, { Options, oraPromise } from 'ora';
import { config } from '../config';

const defaultOptions: Options = {
    discardStdin: !config.exitOnCancel,
    hideCursor: !config.exitOnCancel,
    text: 'Loading...\n'
};

export const spin = (options?: Options) => {
    return ora(Object.assign({}, defaultOptions, options));
};

export const spinWithPromise = <T>(promise: Promise<T>, options: Options) => {
    return oraPromise(promise, Object.assign({}, defaultOptions, options));
};
