import { Box, List, ListItem, Text } from "@chakra-ui/react"
import React from "react"
import { useThirdModuleStore } from "../../State/zustand";

export default function ThirdModule(): JSX.Element {
    const thirdModule = useThirdModuleStore(state => state.thirdItems);

    return (
        <Box>
            <Text fontSize={'20px'}>third Module</Text>
            <List mt={4}>
                {thirdModule ?
                    thirdModule.map((item, index) => (
                        <ListItem key={index}>
                            {/* Render the properties of each item */}
                            #{index + 1}    height: {item.height}, surname: {item.surname}
                        </ListItem>
                    ))
                    : null}
            </List>
        </Box>
    )
}
