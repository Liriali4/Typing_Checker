import React from "react"
import { Box, Text } from "@chakra-ui/react"
import FirstModule from "../Modules/first/first"
import SecondModule from "../Modules/second/second"
import ThirdModule from "../Modules/third/third"
import Form from "../Form/form"

export default function Home(): JSX.Element{

    const Home = 'Home'
    const devision = '-------------------------------------------------------------------------------'

    return(
        <Box>
            <Text fontSize={'28px'}>{Home}</Text>
            <Form/>
            <Text fontSize={'24px'}>{devision}</Text>
            <FirstModule/>
            <Text fontSize={'24px'}>{devision}</Text>
            <SecondModule/>
            <Text fontSize={'24px'}>{devision}</Text>
            <ThirdModule/>
        </Box>
    )
    
}
