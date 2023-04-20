
export enum BoilerplateToastType {
  Success = 'success',
  Error = 'error'
}

export interface BoilerplateToast {
  type: BoilerplateToastType;
  message: string;
}
