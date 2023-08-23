import { Box, List, ListItem, Text } from "@chakra-ui/react"
import React from "react"
import { useSecondModuleStore } from "../../State/zustand";

export default function SecondModule(): JSX.Element {
    const secondModule = useSecondModuleStore(state => state.secondItems);

    return (
        <Box>
            <Text fontSize={'20px'}>Second Module</Text>
            <List mt={4}>
                {secondModule ?
                    secondModule.map((item, index) => (
                        <ListItem key={index}>
                            {/* Render the properties of each item */}
                            #{index + 1} Weight: {item.Weight}, color: {item.color}
                        </ListItem>
                    ))
                    : null}
            </List>
        </Box>
    )
}