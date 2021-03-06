import React from 'react'
import { Flex, Box, Heading, List, ListIcon, ListItem, Spacer, AspectRatio, Stack } from '@chakra-ui/layout'
import { CheckIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'

const Hero = () => {
    return (
        <>
        <Stack w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>
        {/*Retirei um flex e adicionei um box para facilitar o alinhamento*/}
        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
        {/*a width vai ser a responsável pelo alinamento da div de texto*/}
        <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","75%"]} m="auto">
            <Heading color="#007DBA" as="h1" mb="24px">
            EarthLink: All the Internet You Need 
            </Heading>
            <List color="Black.500"spacing={2}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Internet
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Business Internet
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Security & Tools
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Business Tools
                </ListItem>
            </List>
        </Box>
        </Box>
        {/*correção de breakpoints*/}
        <Flex w={["100%","100%","100%","100%","50%"]} mt="0 !important" justify="flex-end">
        <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
            <Image objectPosition={["0 -90px","0 -70px","0 -100px","0 -120px", "0px"]} borderRadius={{xl: "0 0 0 70px"}} src="/hero-earthlink-image.jpg" alt="Hero Image EarthLink" />
        </AspectRatio>
        </Flex>
        </Stack>
        </>
    )
}

export default Hero
