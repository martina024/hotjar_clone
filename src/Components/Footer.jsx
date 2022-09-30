import { Grid,Spacer,GridItem ,Divider,Flex,VStack,Image,Heading,Box} from '@chakra-ui/react'
import React from 'react'
import {IconButton} from "@chakra-ui/button"
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <Box backgroundColor="#1A202C"  >
    <Grid gridTemplateColumns="repeat(6, 1fr) "  color="white"  mb="20%" p={10}>
     
     <Grid ml="100" columns={1} height="0px" gap={3}>
            <GridItem fontSize="20px" fontWeight="bold" >Products</GridItem>
            <GridItem color="#A6A8B3">Product tour</GridItem>
            <GridItem color="#A6A8B3">Headtmaps</GridItem>
            <GridItem color="#A6A8B3">Session recordings</GridItem>
            <GridItem color="#A6A8B3">Feedback</GridItem>
            <GridItem color="#A6A8B3">Surveys</GridItem>
            <Divider orientation='horizontal' w="40" />
            <GridItem color="#A6A8B3">Integrations</GridItem>
            <GridItem color="#A6A8B3">Survey templates</GridItem>
            <GridItem color="#A6A8B3">Highlights</GridItem>
            <GridItem color="#A6A8B3">Workspaces</GridItem>
            <GridItem color="#A6A8B3">Dashboard</GridItem>
            <GridItem color="#A6A8B3">Trends</GridItem>
    </Grid>
    <Grid ml="50" columns={1} height="0px"  gap={3}>
            <GridItem fontSize="20px" fontWeight="bold" >Why Hotjar</GridItem>
            <GridItem color="#A6A8B3">For product teams</GridItem>
            <GridItem color="#A6A8B3">For product managers</GridItem>
            <GridItem color="#A6A8B3">For product designers</GridItem>
            <GridItem color="#A6A8B3">For researchers</GridItem>
            <GridItem color="#A6A8B3">Case studies</GridItem>
    </Grid>
    <Grid ml="50" columns={1} height="100px" gap={3}>
            <GridItem fontSize="20px" fontWeight="bold" >Learn</GridItem>
            <GridItem color="#A6A8B3">Guides</GridItem>
            <GridItem color="#A6A8B3">Blog</GridItem>
            <GridItem color="#A6A8B3">Product forge</GridItem>
            <GridItem color="#A6A8B3">Product updates</GridItem>
            <GridItem color="#A6A8B3">Support</GridItem>
            <GridItem color="#A6A8B3">Product management 101</GridItem>
            <GridItem color="#A6A8B3">Product management glossary</GridItem>
            <GridItem color="#A6A8B3">UX design</GridItem>
            <GridItem color="#A6A8B3">Product experience insights</GridItem>
            <GridItem color="#A6A8B3">Website tracking</GridItem>
    </Grid>
    <Grid ml="50" columns={1} height="0px" gap={3}>
            <GridItem fontSize="20px" fontWeight="bold">Company</GridItem>
            <GridItem color="#A6A8B3">About us</GridItem>
            <GridItem color="#A6A8B3">Careers</GridItem>
            <GridItem color="#A6A8B3">Privacy</GridItem>
            <GridItem color="#A6A8B3">Press</GridItem>
            
    </Grid>
   <Spacer/>
    <Grid columns={1} height="0px"  gap={3}>
            <GridItem fontSize="20px" fontWeight="bold" >Compliance</GridItem>
            <GridItem color="#A6A8B3">Legal overview</GridItem>
            <GridItem color="#A6A8B3">Compliance & security</GridItem>
            <GridItem color="#A6A8B3">Terms of Service</GridItem>
            <GridItem color="#A6A8B3">Privacy Policy</GridItem>
            <GridItem color="#A6A8B3">Acceptable Use Policy</GridItem>
           
    </Grid>
    
</Grid>
<br />
<Divider />

     <Grid justifyContent="flex-end" mr={10}  mt={10}>
        <Flex gap={3}>
        <IconButton icon={<FaFacebook/>} isRound="true"  w="10px"></IconButton>
        <IconButton icon={<FaTwitter/>} isRound="true" w="10px"></IconButton>
        <IconButton icon={<FaLinkedin/>} isRound="true" w="10px"></IconButton>
        <IconButton icon={<FaYoutube/>} isRound="true" w="10px"></IconButton>
        </Flex>
 
    </Grid>
    
    
    <Grid color="#A6A8B3">
    <VStack p={5} >
    <Flex w="100%">
      <Image ml="20" boxSize='1.5rem'src="https://yt3.ggpht.com/eH_MdhjC_DxpUtxBNXqb7fhhfKSa-nWiIQ1IqaRxD06nEbFiIRahQf5bUHE1WPpnfczXsvUdYA=s176-c-k-c0x00ffffff-no-rj" ></Image>
      <Heading size="sm" fontWeight="semibold">Copyright © 2014 - 2022 Hotjar Ltd. All rights reserved.</Heading>
      <Spacer/>
      <Heading size="sm" mr="8">Cookie info</Heading>
      <Heading size="sm" mr="8">Cookie settings</Heading>
      <Heading size="sm" mr="8">Do not track</Heading>
      </Flex>
      </VStack>
    </Grid>
    </Box>
    
    
   
     
       
    </>
   
    
     
  )
}

export default Footer
