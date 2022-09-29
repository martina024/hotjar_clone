
import React,{useState} from 'react'
import { Alert,AlertIcon,AlertTitle, Button,FormControl,Grid,GridItem,Heading,Input,Text,VStack} from '@chakra-ui/react'
import {useNavigate } from 'react-router-dom'
import SignIn from './SignIn'



const Signup = () => {
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const [flag,setFlag]=useState(false)
const[login,setLogin]=useState(true)
const navigate=useNavigate()

function handelSubmit(e){
  e.preventDefault()
  if(!name || !email || !password ){
    setFlag(true)

  }else{
    setFlag(false)
    localStorage.setItem("Email",JSON.stringify(email))
    localStorage.setItem("Password",JSON.stringify(password))
  
    console.log("saved in local storage")
    setLogin(login)
  }

}
function handelClick(){
  setLogin(!login)
  navigate("/signin")
}

  return (
    <>
    {login ? (
    <form onSubmit={handelSubmit}>
       <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack>
        <Heading>Sign Up</Heading>
        
      </VStack>
      <Grid  templateColumns="repeate(1,1fr)" gap={2} w="full">
      <GridItem colSpan={{base:2 ,lg:2}}>
            <FormControl isRequired>
                <Text>Full Name</Text>
                <Input
                type="text"
                placeholder='Name'
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
                onChange={(e)=>setPassword(e.target.value)}
               
                />
            </FormControl>
        </GridItem>
        
        <GridItem colSpan={{base:2 , md:2}}>
            <FormControl>
                <Button type="submit" w="full" onClick={handelClick}>Sign Up</Button>
            </FormControl>
        </GridItem>
      </Grid>
      <p onClick={handelClick}>Already have an account? Sign in now.</p>
    </VStack>

    {flag && (
      <Alert status='error'>
      <AlertIcon />
      <AlertTitle>Please fill the details!</AlertTitle>
      
    </Alert>
    )}

    </form>
):(
    <SignIn/>
)}
    </>
     

  )
}

export default Signup
