
export type FormControlErrorString = string;
export type FormControlErrorFunction = (value: number) => string;
export type FormControlError = FormControlErrorString | FormControlErrorFunction;

export interface FormControlErrors {
  [key: string]: FormControlError;
}
