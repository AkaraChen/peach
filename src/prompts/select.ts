import prompts from 'prompts';
import { BaseOptions } from './type';
import { promptsOptions } from './util';

export type Choice = string | {
    title: string;
    value: string;
}

export type SelectProperties = BaseOptions & {
    choices: Array<Choice>;
    multiselect?: boolean;
};

export async function select(optionsRaw: SelectProperties) {
    const options: prompts.PromptObject = {
        name: 'result',
        type: optionsRaw.multiselect ? 'multiselect' : 'select',
        choices: [] as Array<prompts.Choice>
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
