import { Flex, Text, Input } from "@chakra-ui/react";
import React from "react";

type TypeCheckerInputProps = {
    label: string;
    value?: string | number;
    onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TypeCheckerInput({ label,/*  style, */ value, onChange }: TypeCheckerInputProps): JSX.Element {
 

    return (
        <Flex
            /* style={style} */
            h={'90px'}
            w={'100%'}
            flexDir={'column'}
            justify={'space-around'}
        >
            <Text fontSize={'16px'}>{label}</Text>
            <Input
                bg={'#eaf0fb'}
                h={'45px'}
                w={'100%'}
                p={'10px'}
                outline={'none'}
                borderRadius={'5px'}
                border={'2px solid #6082B6'}
                onChange={onChange}
                value={value}
            />
        </Flex>
    );
}
