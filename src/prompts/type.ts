export interface BaseOptions {
    message?: string;
    initial?: string | number | boolean | Date;
    onCancel?(): void;
    validate?(): boolean;
}

export type textStyles = 'default' | 'password' | 'invisible' | 'emoji'
