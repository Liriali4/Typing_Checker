import { Box, Text, List, ListItem } from "@chakra-ui/react"
import React from "react"
import { useFirstModuleStore } from "../../State/zustand";

export default function FirstModule(): JSX.Element {
    const firstModule = useFirstModuleStore(state => state.firstItems);

    return (
        <Box>
            <Text fontSize={'20px'}>First Module</Text>
            <List mt={4}>
                {firstModule ?
                    firstModule.map((item, index) => (
                        <ListItem key={index}>
                            {/* Render the properties of each item */}
                            #{index + 1} Name: {item.name}, Age: {item.age}
                        </ListItem>
                    ))
                    : null
                }
            </List>
        </Box>
    )
}
