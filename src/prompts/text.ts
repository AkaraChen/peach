import prompts from 'prompts';
import { BaseOptions, textStyles } from './type';
import { promptsOptions } from './util';

export type TextOptions = BaseOptions & {
    initial?: string;
    style?: textStyles
};

export async function text(optionsRaw: TextOptions | string = '') {
    const options: prompts.PromptObject = {
        type: 'text',
        name: 'result'
    };
    if (typeof optionsRaw === 'string') {
        options.message = optionsRaw;
    } else {
        Object.assign(options, optionsRaw);
    }
    return (await prompts(options, promptsOptions())).result as string;
}

export type NumberOptions = TextOptions & {
    max?: number;
    min?: number;
    float?: boolean;
    increment?: number;
}

export async function number(optionsRaw: NumberOptions | string = '') {
    let options: prompts.PromptObject = {
        type: 'number',
        name: 'result'
    };
    if (typeof optionsRaw === 'string') {
        options.message = optionsRaw;
    } else {
        options = {
            ...options,
            ...optionsRaw
        };
    }
    return (await prompts({
        ...options
    }, promptsOptions())).result as number;
}
