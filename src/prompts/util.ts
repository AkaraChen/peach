import prompts from 'prompts';
import { boom } from '../util';

export const onCancel = () => boom('Operation Canceled.', false);

export const promptsOptions = (options?: prompts.Options): prompts.Options => {
    return {
        onCancel,
        ...options
    };
};
