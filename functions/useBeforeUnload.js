import { useEffect } from 'react';

const useBeforeUnload = (handler) => {
  useEffect(() => {
    window.addEventListener('beforeunload', handler);
    return () => {
      window.removeEventListener('beforeunload', handler);
    };
  }, [handler]);
};

export default useBeforeUnload;
