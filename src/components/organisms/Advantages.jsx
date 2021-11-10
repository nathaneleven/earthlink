import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const Advantages = () => {
    return (
<>
<Box align="center" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">What you get with EarthLink</Heading>

    <SimpleGrid columns={{base:"1", md:"4"}} spacing={10} maxW="1250px">
      
    <Flex bg="#F6F6F6" p="5" align="center" direction="column" >
    <Box py="15px"><Image src="/internet-earthlink-icon.png"/></Box>
      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Internet</Heading>
      <Text>Connect your entire household at the speed you need.</Text>
    </Flex>

    <Flex bg="#F6F6F6" p="5" align="center" direction="column" >
    <Box py="15px"><Image src="/business-internet-earthlink-icon.png"/></Box>

      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Business Internet</Heading>
      <Text>Get into work with a reliable, safer high-speed internet plan.</Text>
    </Flex>

    <Flex bg="#F6F6F6" p="5" align="center" direction="column" >
    <Box py="15px"><Image src="/security-tools-earthlink-icon.png"/></Box>

      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Security & Tools</Heading>
      <Text>Protect your data with tools designed to give you peace of mind.</Text>
    </Flex>

    <Flex bg="#F6F6F6" p="5" align="center" direction="column" >
    <Box py="15px"><Image src="/business-tools-earthlink-icon.png"/></Box>

      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Business Tools</Heading>
      <Text>Grow your business with design and digital marketing products.</Text>
    </Flex>
  </SimpleGrid>

</Box>
</>
    )}

export default Advantages