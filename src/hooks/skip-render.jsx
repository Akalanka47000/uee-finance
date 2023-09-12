import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

const useSkipRender = () => {
  const [skip, setSkip] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    setSkip(!isFocused);
  }, [isFocused]);

  return skip;
};

export default useSkipRender;
