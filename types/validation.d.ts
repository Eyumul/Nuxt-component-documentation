export interface FieldValidationMetaInfo {
    field: string;
    name: string;
    label?: string;
    value: unknown;
    form: Record<string, unknown>;
    rule?: {
        name: string;
        params?: Record<string, unknown> | unknown[];
    };
}