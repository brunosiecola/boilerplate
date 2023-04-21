import { FormControlErrors } from '../interfaces/form-control-errors.interface';

export const FORM_CONTROL_ERRORS: FormControlErrors = {
  required: 'Por favor, informe esse campo.',
  requiredTrue: 'Por favor, informe esse campo.',
  email: 'Por favor, informe o e-mail no formato: seunome@exemplo.com.br.',
  pattern: 'Por favor, informe esse campo no formato correto.',
  min: (min: number) => `Por favor, informe um valor de no mínimo ${min}.`,
  max: (max: number) => `Por favor, informe um valor de no máximo ${max}.`,
  minlength: (requiredLength: number) => `Por favor, informe no mínimo ${requiredLength} caracteres.`,
  maxlength: (requiredLength: number) => `Por favor, informe no máximo ${requiredLength} caracteres.`,
};
