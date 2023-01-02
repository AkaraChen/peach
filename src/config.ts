export interface PeachConfig {
    exitOnCancel: boolean
}

export const defineConfig = (config: Partial<PeachConfig>): PeachConfig => {
    return {
        exitOnCancel: false,
        ...config
    };
};
