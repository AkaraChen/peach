import prompts from 'prompts';
import { BaseOptions } from './type';
import { promptsOptions } from './util';

export type SelectProperties = BaseOptions & {
    choices: Array<
        | string
        | {
            title: string;
            value: string;
        }
    >;
    multiselect?: boolean;
};

export async function select(optionsRaw: SelectProperties) {
    const options: prompts.PromptObject = {
        name: 'result',
        type: optionsRaw.multiselect ? 'multiselect' : 'select',
        choices: [] as Array<prompts.Choice>
    };
    for (const choice of optionsRaw.choices) {
        if (typeof choice === 'string') {
            (options.choices as Array<prompts.Choice>).push({
                title: choice,
                value: choice
            });
        } else {
            (options.choices as Array<prompts.Choice>).push(choice);
        }
    }
    return (await prompts(options, promptsOptions())).result;
}
