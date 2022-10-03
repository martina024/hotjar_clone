
import React,{useState} from 'react'
import { Image,Alert,AlertIcon,AlertTitle, Button,FormControl,Grid,GridItem,Heading,Input,Text,VStack,Box,Form} from '@chakra-ui/react'
import {Link, useNavigate } from 'react-router-dom'
import SignIn from './SignIn'
import { FaGoogle } from 'react-icons/fa'



const Signup = () => {
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const [flag,setFlag]=useState(false)
const[login,setLogin]=useState(true)
const navigate=useNavigate()

const handelSubmit=(e)=>{
  e.preventDefault()
  if(!name || !email || !password ){
    setFlag(true)

  }else{
    setFlag(false)
    localStorage.setItem("Email",JSON.stringify(email))
    localStorage.setItem("Password",JSON.stringify(password))
  
    console.log("saved in local storage")
    setLogin(login)
    navigate("/signin")
  }

}
const handelClick=(e)=>{
  e.preventDefault()
  setLogin(!login)
  
}

  return (
    <>
    {login ? (
    <form onSubmit={handelSubmit}>
      
      <Link to="/"><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfNoKYanul7HEWWiUdxgSDF9be8egWbZB6M21m0FoS8D9BCzvfw3dO7oXJr575lnb-xg&usqp=CAU' margin="auto" w="10%"/></Link> 
      <Box w="30%" margin="auto">

      
       <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack margin="auto" >
        <Heading>Sign Up</Heading>
        <Button w="180%" colorScheme='messenger' leftIcon={<FaGoogle />}>
    Sign up with Google
  </Button>
        
      </VStack>
      <Grid  templateColumns="repeate(1,1fr)" gap={2} w="full">
      <GridItem colSpan={{base:2 ,lg:2}}>
            <FormControl isRequired>
                <Text>Full Name</Text>
                <Input
                type="text"
                placeholder='Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
             
                />
            </FormControl>
        </GridItem>
        <GridItem colSpan={{base:2 ,lg:2}}>
            <FormControl isRequired>
                <Text>Email</Text>
                <Input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                
                />
            </FormControl>
        </GridItem>
        <GridItem  colSpan={{base:2 ,lg:2}}>
            <FormControl isRequired>
                <Text>Password</Text>
                <Input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
               
                />
            </FormControl>
        </GridItem>
        
        <GridItem colSpan={{base:2 , md:2}}>
            <FormControl>
                <Button type="submit" w="full" >Sign Up</Button>
            </FormControl>
        </GridItem>
      </Grid>
      <p onClick={handelClick}>Already have an account? <span style={{color:"blue",cursor:"pointer"}}>Sign in now</span>.</p>
    
      {flag && (
      <Alert status='error'>
      <AlertIcon />
      <AlertTitle>Please fill the details!</AlertTitle>
      
    </Alert>
    )}
    
    </VStack>

    

</Box>

    </form>
):(
    <SignIn/>
)}


    </>
     

  )
}

export default Signup

