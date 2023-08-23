import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import TypingChecker from './Typing_checker';
import Home from './screens/home';
import { useFirstModuleStore, useSecondModuleStore, useThirdModuleStore } from './State/zustand';

export default function Application(): JSX.Element {

  const fetchFirst = useFirstModuleStore(state => state.getFirstItems);
  const fetchSecond = useSecondModuleStore(state => state.getSecondItems);
  const fetchThird = useThirdModuleStore(state => state.getThirdItems);

  useEffect(() => {
    fetchFirst();
    fetchSecond();
    fetchThird()
  }, []);

  return (
    <Box>
      <TypingChecker/>
      <Home/>
    </Box>
  );
}

