import prompts, { Choice } from 'prompts';
import { BaseOptions } from './type';
import { promptsOptions } from './util';

export type PeachChoice = string | Choice

export type SelectProperties = BaseOptions & {
    choices: Array<PeachChoice>;
    multiselect?: boolean;
};

export async function select(optionsRaw: SelectProperties) {
    const options: prompts.PromptObject = {
        name: 'result',
        type: optionsRaw.multiselect ? 'multiselect' : 'select',
        choices: [],
        message: optionsRaw.message
    };
    for (const choice of optionsRaw.choices) {
        if (options.choices && Array.isArray(options.choices)) {
            if (typeof choice === 'string') {
                options.choices.push({
                    title: choice,
                    value: choice
                });
            } else {
                options.choices.push(choice);
            }
        }
    }
    return (await prompts(options, promptsOptions())).result;
}
