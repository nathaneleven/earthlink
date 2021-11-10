import React from 'react'
import { Flex, Box, Heading, AspectRatio, Stack, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const SaferInfo = () => {
    return (
        <>
        <Stack bgColor="#F1F1F1" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>
        {/*Retirei um flex e adicionei um box para facilitar o alinhamento*/}
        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
        {/*a width vai ser a responsável pelo alinamento da div de texto*/}
        <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","75%"]} m="auto">
            <Heading mb="24px">
            EarthLink: Safer Internet for You 
            </Heading>
            <Text>EarthLink has the security tools you need to ensure your household and business stay secure. It’s possible by harnessing the power of Norton LifeLock, the data on your computer, smartphone, tablets, and other connected devices are protected.</Text>
        </Box>
        </Box>
        {/*correção de breakpoints*/}
        <Flex w={["100%","100%","100%","100%","50%"]} mt="0 !important" justify="flex-end">
        <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
            <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 0 70px"}} src="/saferinfo-earthlink-image.jpg" alt="Hero Image EarthLink" />
        </AspectRatio>
        </Flex>
        </Stack>
        </>
    )
}

export default SaferInfo
