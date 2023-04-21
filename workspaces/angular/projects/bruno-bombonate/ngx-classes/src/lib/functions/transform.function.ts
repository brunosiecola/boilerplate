import { SearchParam } from '../interfaces/search-param.interface';
import { SearchParamValueType } from '../interfaces/search-param.interface';
import { transformNumber } from './transform-number.function';
import { transformString } from './transform-string.function';
import { transformBoolean } from './transform-boolean.function';

export const transform = (searchParam: SearchParam, searchParamValue: any): any => {
  if (searchParam.valueType === SearchParamValueType.Number) {
    return transformNumber(searchParamValue);
  } else if (searchParam.valueType === SearchParamValueType.String) {
    return transformString(searchParamValue);
  } else if (searchParam.valueType === SearchParamValueType.Boolean) {
    return transformBoolean(searchParamValue);
  }
  return null;
}
