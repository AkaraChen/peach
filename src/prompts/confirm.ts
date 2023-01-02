import prompts from 'prompts';
import { BaseProperties } from './type';
import { promptsOptions } from './util';

export type ConfirmProperties = BaseProperties;

export async function confirm(optionsRaw: ConfirmProperties | string) {
    let options: ConfirmProperties;
    options = typeof optionsRaw === 'string' ? { message: optionsRaw } : optionsRaw;
    const { message, initial = true } = options;
    return (
        await prompts(
            {
                type: 'confirm',
                name: 'result',
                message: message,
                initial
            },
            promptsOptions()
        )
    ).result as boolean;
}
