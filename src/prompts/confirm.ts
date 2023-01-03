import prompts from 'prompts';
import { BaseOptions } from './type';
import { promptsOptions } from './util';

export type ConfirmProperties = BaseOptions;

export async function confirm(optionsRaw?: ConfirmProperties | string) {
    const options: prompts.PromptObject = {
        type: 'confirm',
        name: 'result'
    };
    if (optionsRaw) {
        if (typeof optionsRaw === 'string') {
            options.message = optionsRaw;
        } else {
            Object.assign(options, optionsRaw);
        }
    }
    return (
        await prompts(
            options,
            promptsOptions()
        )
    ).result as boolean;
}
