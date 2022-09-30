import React from 'react'
import { Container,Button,Grid,GridItem,AspectRatio,Flex,Image,Box, Divider, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import {FaGoogle} from "react-icons/fa"
import {motion} from "framer-motion"
import {useref ,useEffect,useState} from  "react"

const Dashboard = () => {
  return (
    
    <>
    
    <Box p={5} ml="50" fontFamily="sans-serif" boxSizing='box' >
     <Heading w="70%" fontWeight="semibold">Understand <span style={{color:'red'}}>how users behave</span>  on your site, what they need, and how they feel, fast.</Heading>
    <Flex gap={8} mt="10">
      <Flex gap={2}>
        <Image src="https://images.ctfassets.net/lh3zuq09vnm2/6zxMbtJI8T43Ia7uHg49YB/32b9315a40b4f1363fb448bd0cab5534/icon-no-card.svg"/>
        <Text>No credit card required</Text>
      </Flex>
      <Flex gap={2}>
        <Image src="https://images.ctfassets.net/lh3zuq09vnm2/o8L9i7vSjKytR7aYfef7C/ead95db8958fa7ef66750e9ba4fea91e/icon-sign.svg" />
        <Text>56,549 users signed up last month</Text>
      </Flex>
      <Flex gap={2}>
        <Image src="https://images.ctfassets.net/lh3zuq09vnm2/6lgSqbFdgGqSyLx3sGk18/e768204f0c3755e5dd816762a402ac24/icon-privacy.svg" />
        <Text>GDPR- & CCPA-ready</Text>
      </Flex>
    </Flex>
    
    <Grid mt="10" templateColumns='repeat(2, 1fr)' gap={50}  >
    <GridItem   >
    <AspectRatio maxW='700px' maxH="400px" ratio={1} >
  <iframe
  
    title='why hotjar'
    src='https://www.youtube.com/embed/YsmMn5MWDN4'
    allowFullScreen
    
  />
  
</AspectRatio>

    </GridItem>
    <GridItem ml="1rem" mt="30px" >
    <Box mt="30px" w="70%" >
      <Heading  fontSize={25} fontWeight="normal">The slow, manual days of collating data and feedback are over.</Heading>
      <Text mt="5">Hotjar is an intuitive, visual way to discover, consolidate, and communicate user needs.</Text>

      <Stack direction="column"  spacing={4} mt="5" mb="5">     
      <Button position="static" colorScheme='messenger' variant='outline' w="15rem">
        Start free with email
      </Button>
      <Button position="static" colorScheme='messenger' leftIcon={<FaGoogle/>} variant='solid' w="20rem">
        Start free with Google
      </Button>
      </Stack>
      <Text>Hotjar is free forever - upgrade anytime</Text>
    </Box>
    </GridItem>
    
    </Grid>
    <div>
      <motion.div className='carousel' >
        <motion.div className='inner-carousel'>

        </motion.div>
      </motion.div>
    </div>
     </Box>
     </>
  )
}

export default Dashboard
