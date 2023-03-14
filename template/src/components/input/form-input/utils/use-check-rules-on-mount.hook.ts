import { ControllerRenderProps } from 'react-hook-form/dist/types/controller';

import { useComponentDidMount } from '@src/hooks';

export const useCheckRulesOnMount = (
  field: ControllerRenderProps,
  checkRulesOnMount?: boolean,
) => {
  useComponentDidMount(() => {
    if (checkRulesOnMount) {
      field.onChange(field.value);
    }
  });
};
