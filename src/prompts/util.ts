import prompts from 'prompts';
import { boom } from '../util';
import { config } from '../config';

export const onCancel = () => boom('Operation Canceled.', false);

export const promptsOptions = (options?: prompts.Options): prompts.Options => {
    return {
        onCancel: config.exitOnCancel ? onCancel : undefined,
        ...options
    };
};
