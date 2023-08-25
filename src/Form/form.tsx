import React, { useState } from "react";
import { Text, Flex } from "@chakra-ui/react";
import TypeCheckerButton from "../Components/TaskButton";
import TypeCheckerInput from "../Components/TaskInput";
import { FirstType, SecondType, ThirdType } from "../Types";
import {  addSecondItem, addThirdItem } from "./Repository/FormRepository";
import {  useSecondModuleStore, useThirdModuleStore } from "../State/zustand";
import {  MediatorAsync, TypesEnum } from "../Typing_checker/receiver";

export default function Form(): JSX.Element {
    const [firstData, setFirstData] = useState<FirstType>({ name: "", age: 0 });
    const [secondData, setSecondData] = useState<SecondType>({ color: "", Weight: 0 });
    const [thirdData, setThirdData] = useState<ThirdType>({ surname: "", height: 0 });

    const secondModule = useSecondModuleStore(state => state.secondItems);
    const thirdModule = useThirdModuleStore(state => state.thirdItems);

    const handleButton1Click = async () => {
        const objeto = {
            name: firstData.name,
            age: firstData.age,
        };
    
        try {
            const resposta = await MediatorAsync(TypesEnum.First, objeto); 
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
 */
    const handleButton2Click = () => {
        addSecondItem(secondData, secondModule)
        setSecondData({
            color: "",
            Weight: 0,
        });
    };

    const handleButton3Click = () => {
        addThirdItem(thirdData, thirdModule)
        setThirdData({
            surname: "",
            height: 0,
        });
    };

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
                    <TypeCheckerButton label={"Button 1"} onClick={handleButton1Click} />
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
                    <TypeCheckerButton label={"Button 2"} onClick={handleButton2Click} />
                </Flex>
                <Flex
                    flexDir={'column'}
                    justify={'space-around'}
                    w={'250px'}
                    h={'200px'}
                    mt={4}
                >
                    <Text fontSize={'24px'}>3º</Text>
                    <TypeCheckerInput label={"Surname"} value={thirdData.surname} onChange={(e) => setThirdData({ ...thirdData, surname: e.target.value })} />
                    <TypeCheckerInput label={"Height"} value={thirdData.height.toString()} onChange={(e) => setThirdData({ ...thirdData, height: Number(e.target.value) })} />
                    <TypeCheckerButton label={"Button 3"} onClick={handleButton3Click} />
                </Flex>
            </Flex>
        </Flex>
    );
}
