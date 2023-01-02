import prompts from 'prompts';
import { BaseProperties } from './type';
import { promptsOptions } from './util';

export type TextOptions = BaseProperties & {
    initial?: string;
};

export async function text(optionsRaw: TextOptions | string) {
    const options: prompts.PromptObject = {
        type: 'text',
        name: 'result'
    };
    if (typeof optionsRaw === 'string') {
        options.message = optionsRaw;
    } else {
        const { message, initial } = optionsRaw;
        options.message = message;
        options.initial = initial;
    }
    return (await prompts(options, promptsOptions())).result as string;
}
