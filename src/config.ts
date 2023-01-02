export interface PeachConfig {
    exitOnCancel: boolean
}

const defaultConfig: PeachConfig = {
    exitOnCancel: true
};

export let config: PeachConfig = defaultConfig;

export const setConfig = (input: Partial<PeachConfig>) => {
    config = Object.assign({}, config, input);
};
