import consola from 'consola';

export const boom = (error: string | Error, exit: boolean = true) => {
    consola.error(
        typeof error === 'string'
            ? new Error(error)
            : error
    );
    if (exit) process.exit(1);
};
