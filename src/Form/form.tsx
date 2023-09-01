import React, { useState } from "react";
import { Text, Flex } from "@chakra-ui/react";
import TypeCheckerButton from "../Components/TaskButton";
import TypeCheckerInput from "../Components/TaskInput";
import { FirstType, SecondType } from "../Types";
import {  MediatorAsync } from "../Typing_checker/receiver";

export default function Form(): JSX.Element {
    const [firstData, setFirstData] = useState<FirstType>({ name: "", age: 0 });
    const [secondData, setSecondData] = useState<SecondType>({ color: "", Weight: 0 });

    const handleButtonClick = async () => {
        const objeto = {
            name: firstData.name,
            age: firstData.age,
        };
    
        try {
            const resposta = await MediatorAsync(objeto); 
            console.log('RECEBENDO RESPOSTAS A PARTIR DO FORMULÁRIO DE ENVIO,  RESPOSTA:', resposta, 'DADOS ENVIADOS', objeto);
    
            setFirstData({
                name: "",
                age: 0,
            });
        } catch (error) {
            console.error('ERRO AO PROCESSAR DADOS:', error);
        }
    };
    
    /*     const handleButton1Click = () => {
        console.log('AQUUI', firstModule)

        addFirstItem(firstData, firstModule)
        setFirstData({
            name: "",
            age: 0,
        });
    };

    const handleButton2Click = () => {
        addSecondItem(secondData, secondModule)
        setSecondData({
            color: "",
            Weight: 0,
        });
    };
 */

    return (
        <Flex
            p={'60px 30px'}
        >
            <Flex
                w={'100%'}
                justify={'space-around'}
            >
                <Flex
                    flexDir={'column'}
                    justify={'space-around'}
                    w={'250px'}
                    h={'200px'}
                    mt={4}
                >
                    <Text fontSize={'24px'}>1º</Text>
                    <TypeCheckerInput label={"Name"} value={firstData.name} onChange={(e) => setFirstData({ ...firstData, name: e.target.value })} />
                    <TypeCheckerInput label={"Age"} value={firstData.age.toString()} onChange={(e) => setFirstData({ ...firstData, age: Number(e.target.value) })} />
                    <TypeCheckerButton label={"Button 1"} onClick={handleButtonClick} />
                </Flex>
                <Flex
                    flexDir={'column'}
                    justify={'space-around'}
                    w={'250px'}
                    h={'200px'}
                    mt={4}
                >
                    <Text fontSize={'24px'}>2º</Text>
                    <TypeCheckerInput label={"Color"} value={secondData.color} onChange={(e) => setSecondData({ ...secondData, color: e.target.value })} />
                    <TypeCheckerInput label={"Weight"} value={secondData.Weight.toString()} onChange={(e) => setSecondData({ ...secondData, Weight: Number(e.target.value) })} />
                    <TypeCheckerButton label={"Button 2"} onClick={handleButtonClick} />
                </Flex>
            </Flex>
        </Flex>
    );
}
