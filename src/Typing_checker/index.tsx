import { Box, Text } from "@chakra-ui/react"
import React from "react"

export default function TypingChecker(): JSX.Element{
    const test = 'Testando as tipagens'
    return(
        <Box>
            <Text>{test}</Text>
        </Box>
    )
}