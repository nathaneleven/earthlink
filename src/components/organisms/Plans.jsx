import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex, List, ListIcon, ListItem, HStack, StackDivider } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'
import { CheckIcon } from '@chakra-ui/icons'

const Plans = () => {
    return (
<>
<Box align="center" bgColor="#F1F1F1" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">MetroNet plans and deals</Heading>

  <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex bg="#fff" rounded="15px" boxShadow="xl" p="5" align="center" direction="column" >
      <Heading pb="10px" as="h3" fontSize="2xl">Basic Internet</Heading>
      <Text>200 Mbps</Text>

      <Flex align="start" direction="row" fontWeight="700">
        <Box fontSize="29px" mt="7px" >$</Box>
        <Box fontSize="94px" color="#003767" mt="-25px">89</Box>
        <Box direction="column">
            <Box fontSize="43px" textAlign="start" mb="-18px" color="#003767" >99</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
        </Box>
      </Flex>
      <List textAlign="start" pb="20px" spacing={2}>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Good for 4+ connected devices 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Includes wireless router 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Rapid HD video download
                </ListItem>
      </List>

      <CallNowPhoneBt/>
    </Flex>

    <Flex bg="#fff" rounded="15px" boxShadow="xl" p="5" align="center" direction="column" >
      <Heading pb="10px" as="h3" fontSize="2xl">Advance Internet</Heading>
      <Text>500 Mbps</Text>

      <Flex align="start" direction="row" fontWeight="700">
        <Box fontSize="29px" mt="7px" >$</Box>
        <Box fontSize="94px" color="#003767" mt="-25px">64</Box>
        <Box direction="column">
            <Box fontSize="43px" textAlign="start" mb="-18px" color="#003767">99</Box><Box fontSize="21px" textAlign="start" >/mo.</Box>
        </Box>
      </Flex>
      <List textAlign="start" pb="20px" spacing={2}>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Good for 4+ connected devices 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Includes wireless router 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Rapid HD video download
                </ListItem>
      </List>
      <CallNowPhoneBt/>
    </Flex>

    <Flex bg="#fff" rounded="15px" boxShadow="xl" p="5" align="center" direction="column" >
      <Heading pb="10px" as="h3" fontSize="2xl">Internet + Basic TV + Home Phone</Heading>
      <Text>500 Mbps</Text>

      <Flex align="start" direction="row" fontWeight="700">
        <Box fontSize="29px" mt="7px" >$</Box>
        <Box fontSize="94px" color="#003767" mt="-25px">39</Box>
        <Box direction="column">
            <Box fontSize="43px" textAlign="start" mb="-18px" color="#003767">99</Box><Box fontSize="21px" textAlign="start" >/mo.</Box>
        </Box>
      </Flex>
      <List textAlign="start" pb="20px" spacing={2}>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Good for 4+ connected devices 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Includes wireless router 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Rapid HD video download
                </ListItem>
      </List>

      <CallNowPhoneBt/>
    </Flex>

  </SimpleGrid>
  
  <Flex bg="#fff" color="#003767" rounded="15px" boxShadow="xl" p="5" align="center" direction="column" mt="40px" w="2xl" >
  <HStack divider={<StackDivider borderColor="gray.200" />}  spacing={4} textAlign="start">
    <Box>Add <strong>WholeHome Wi-Fi</strong> for only $9.95/mo </Box>
    <Box>WholeHome Wi-Fi covers your entire house with consistent reliable signal strength. </Box>
  </HStack>
  </Flex >
  

</Box>
</>
    )}



export default Plans