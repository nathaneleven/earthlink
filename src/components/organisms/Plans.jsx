import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex, List, ListIcon, ListItem, HStack, StackDivider } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'
import { CheckIcon } from '@chakra-ui/icons'

const Plans = () => {
    return (
<>
<Box align="center" bgColor="#fff" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">EarthLink plans and prices</Heading>

  <SimpleGrid columns={{base:"1", md:"2"}} spacing={10} maxW="1250px">
    <Flex rounded="md" border="solid 3px #F68D1F" p="5" align="center" direction="column" >
      <Heading pb="10px" as="h3" fontSize="2xl">High-Speed Internet </Heading>
      <Text>starting at </Text>

      <Flex align="start" direction="row" fontWeight="700">
        <Box fontSize="29px" color="#F68D1F" mt="7px" >$</Box>
        <Box fontSize="94px" color="#F68D1F" mt="-25px">49</Box>
        <Box direction="column">
            <Box fontSize="43px" textAlign="start" mb="-18px" color="#F68D1F" >95</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
        </Box>
      </Flex>
      <Text pb="5">
      EarthLink offers high-speed, reliable home and business internet with no data caps and no credit checks. 
      </Text>

      <CallNowPhoneBt/>
    </Flex>

    <Flex rounded="md" border="solid 3px #007DBA" p="5" align="center" direction="column" >
      <Heading pb="10px" as="h3" fontSize="2xl">Advance Internet</Heading>
      <Text>starting at</Text>

      <Flex align="start" direction="row" fontWeight="700">
        <Box fontSize="29px" color="#F68D1F" mt="7px" >$</Box>
        <Box fontSize="94px" color="#F68D1F" mt="-25px">64</Box>
        <Box direction="column">
            <Box fontSize="43px" textAlign="start" mb="-18px" color="#F68D1F">99</Box><Box fontSize="21px" textAlign="start" >/mo.</Box>
        </Box>
      </Flex>
      <Text pb="5">
      EarthLink offers a variety of plans to help keep you connected on one of America’s largest and fastest networks.
      </Text>
      <CallNowPhoneBt/>
    </Flex>
  </SimpleGrid> 

</Box>
</>
    )}



export default Plans