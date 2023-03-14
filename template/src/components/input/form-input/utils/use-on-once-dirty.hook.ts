import { useEffect, useState } from 'react';

export const useFormInputOnOnceDirty = (
  isDirty: boolean,
  callback?: () => void,
) => {
  const [isOnceDirty, setIsOnceDirty] = useState(false);

  useEffect(() => {
    if (isDirty) {
      setIsOnceDirty(() => true);
    }
  }, [isDirty, setIsOnceDirty]);

  useEffect(() => {
    if (isOnceDirty) {
      callback?.();
    }
  }, [isOnceDirty, callback]);
};
