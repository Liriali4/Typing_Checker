import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Home from './screens/home';
import { useFirstModuleStore, useSecondModuleStore } from './State/zustand';

export default function Application(): JSX.Element {

  const fetchFirst = useFirstModuleStore(state => state.getFirstItems);
  const fetchSecond = useSecondModuleStore(state => state.getSecondItems);

  useEffect(() => {
    fetchFirst();
    fetchSecond();
  }, []);

  return (
    <Box>
      <Home/>
    </Box>
  );
}

