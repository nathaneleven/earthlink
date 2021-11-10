import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack, List, ListIcon, ListItem, Spacer } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { CheckIcon } from '@chakra-ui/icons'
const About = () => {
    return (
        <>
        <Stack bgColor="#F1F1F1" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading mb="24px">
                    About EarthLink
                    </Heading>
                        <Text>
                        Headquartered in Atlanta, Georgia, EarthLink offers internet access, premium email, web hosting and privacy and data security products and services to customers throughout the United States.<br/><br/>

                        EarthLink also has key partner relationships with several of the nation’s largest providers, enabling the Company to offer products and connectivity services available to millions of households across the country. 
                        </Text>
                </Box>
                </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/about-earthlink-image.jpg" alt="About Image EarthLink" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default About