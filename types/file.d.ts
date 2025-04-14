export interface File extends Blob {
    readonly lastModified: number;
    readonly name: string;
}

export type Base64 = {
    base64: unknown;
}

export type FileInfo = {
    name: string;
    size: string;
    type: string;
}