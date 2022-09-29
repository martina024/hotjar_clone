import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {Grid,GridItem,FormControl,Text,Input,Alert,AlertIcon,AlertTitle, Container,Flex,Box ,VStack ,Image, Heading, Button} from '@chakra-ui/react'

import DashBoard from '../Components/DashBoard'
import Signup from './Signup'




const SignIn = () => {
  const [emaillog,setEmaillog]=useState("")
  const [passwordlog,setPasswordlog]=useState("")
  const [flag,setFlag]=useState(false) 
  const [home,setHome]=useState(true)
  


    function handelLogin(e){
        e.preventDefault()
        let mail=localStorage.getItem("Email").replace(/"/g, "")
        let pass=localStorage.getItem("Password").replace(/"/g, "")
    
    if(!emaillog ||!passwordlog){
        setFlag(true)
        console.log("Empty")
    }else if(passwordlog !== pass || emaillog !==mail){
        setFlag(true)
    }else{
        setHome(!home)
        setFlag(false)
    }
    }
  return (
    <>
    <Container
      maxW={{base:"full" , lg:"container.xl"}}
      p={{base:2,lg:0}}
      >
        <Flex h="auto" py={20} direction={{base:"column-reverse",lg:"row"}}>
          
          {home ? (
            <Box bg='white' w='40%' p={4} >
   <form onSubmit={handelLogin}>


    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack>
        <Heading>Sign In</Heading>
        <p>Need a Hotjar account? <Link to="/signup">Sign Up</Link></p>
      </VStack>
      <Grid  templateColumns="repeate(1,1fr)" gap={2} w="full">
        <GridItem colSpan={{base:2 ,lg:2}}>
            <FormControl isRequired>
                <Text>Email</Text>
                <Input
                type="email"
                placeholder='Email'
                onChange={(e)=>setEmaillog(e.target.value)}
                
                />
            </FormControl>
        </GridItem>
        <GridItem  colSpan={{base:2 ,lg:2}}>
            <FormControl isRequired>
                <Text>Password</Text>
                <Input
                type="password"
                placeholder='Password'
                onChange={(e)=>setPasswordlog(e.target.value)}
                
                />
            </FormControl>
        </GridItem>
        
        <GridItem colSpan={{base:2 , md:2}}>
            <FormControl>
                <Button type="submit" w="full" >Sign In</Button>
            </FormControl>
        </GridItem>
      </Grid>
     
    </VStack>  
    
    {flag && (
      <Alert status='error'>
      <AlertIcon />
      <AlertTitle>Please fill the correct details!</AlertTitle>
      
    </Alert>
    )} 


    </form>
    </Box >
    ):(
        <DashBoard/>
    )}
          
  
          <Box backgroundColor="#BEE3F8" w='80%' p={4} > 
            
            <VStack>
              <Box mt="30px" p={10} ml="10%">
                  <Heading fontSize="md" fontWeight="light" mb="10px" >HOTJAR GUIDES</Heading>
                  <Image w="70%" src='https://insights.hotjar.com/static/37d85d9a61db85c93d7f.png'/>
                  <Heading fontSize="lg" fontWeight="semibold" mt="10px">Guides to learn more about Hotjar</Heading>
                  
                  <Container mt="10px" ml="-2%" textAlign="left">Check out our guides to better understand user behavior, make the right changes, improve UX, and increase conversions on your website and product.</Container>
                  <Button mt="10px" colorScheme='blue' variant='outline'>Explore Guides</Button>
                  
              </Box>
            </VStack>
          
          </Box>
          
        </Flex>
    </Container>
   
    </>
  )
}

export default SignIn
