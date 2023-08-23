import { Button } from "@chakra-ui/react";
import React from "react";

type TypeCheckerButtonProps = {
  label: string;
  onClick?: (e: any) => void;
};

export default function TypeCheckerButton({ label, onClick }: TypeCheckerButtonProps): JSX.Element {
  return (
    <Button
      p={'10px'}
      h={'50px'}
      w={'100px'}
      m={'20px auto'}
      bg='#6082B6'
      as='button'
      color='white'
      fontWeight='bold'
      borderRadius='5px'
      _hover={{
        bg: '#0F52BA',
      }}
      onClick={onClick}>{label}</Button>
  );
}
