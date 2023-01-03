import ora, { Options, oraPromise, PromiseOptions } from 'ora';
import { config } from '../config';
import { red, green } from 'kolorist';

const defaultOptions: Options = {
    discardStdin: !config.exitOnCancel,
    hideCursor: !config.exitOnCancel,
    text: 'Loading...\n'
};

export const spin = (options?: Options) => {
    return ora(Object.assign({}, defaultOptions, options));
};

const defaultPromiseOptions: PromiseOptions<any> = {
    ...defaultOptions,
    successText: `${green('✔')} Operation succeed.`,
    failText: `${red('✗')} Operation failed.`
};

export const spinWithPromise = <T>(promise: Promise<T>, options: PromiseOptions<T>) => {
    return oraPromise(promise, Object.assign({}, defaultPromiseOptions, options));
};
