import {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Checkbox,Grid,GridItem,FormControl,Text,Input,Alert,AlertIcon,AlertTitle, Container,Flex,Box ,VStack ,Image, Heading, Button, Spacer} from '@chakra-ui/react'
import { FaGoogle } from 'react-icons/fa'
import DashBoard from '../Components/Dashboard'
import Signup from './Signup'




const SignIn = () => {
  const [emaillog,setEmaillog]=useState("")
  const [passwordlog,setPasswordlog]=useState("")
  const [flag,setFlag]=useState(false) 
  const [home,setHome]=useState(true)
  

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
 


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

    if(loading){
      return(
        <div style={{padding:"3%",marginLeft:"45%", fontWeight:"bolder",fontSize:"20px"}}>. . . . . . . loading</div>
      )
    }
    

  return (
    
    <>
    <Container
      maxW={{base:"full" , lg:"container.xl"}}
      p={{base:3,lg:2}}
      >
         <Link to="/"><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfNoKYanul7HEWWiUdxgSDF9be8egWbZB6M21m0FoS8D9BCzvfw3dO7oXJr575lnb-xg&usqp=CAU' margin="auto" w="10%"/></Link> 
        <Flex w="100%" direction={{base:"column-reverse",lg:"row"}} gap={5}>
         
         
          {home ? (
           
            <Box w="50%">
   <form onSubmit={handelLogin}>


    <VStack w="full" alignItems="flex-start">
      <VStack  p={10}>
        <Heading fontSize="30px" mr={20}>Sign In</Heading>
       <br />
       <Box >
        <Button  colorScheme='messenger' leftIcon={<FaGoogle />} size='lg'
          height='48px'
          width='540px'
          border='1px'
          ml="-7%"
          >
        Sign up with Google
        </Button> 

       </Box>
        
  <br />
  <Text w="full">Need a Hotjar account? <Link to="/signup" style={{color:'blue'}}>Sign Up</Link></Text>
      </VStack>
      <Grid  templateColumns="repeate(1,1fr)" gap={2} w="550px">
        <GridItem  colSpan={{base:3 ,lg:2}}>
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
        

        <Checkbox size='md' colorScheme='green' >
         Keep me sign in
         </Checkbox>
        
        <GridItem colSpan={{base:2 , md:2}}>
            <FormControl>
                <Link to="/"><Button type="submit" w="full" >Sign In</Button></Link>
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
    </Box>
    
   
    ):(
        <DashBoard/>
    )}
    
 
          
            
            <VStack backgroundColor="#dce2f6" >
              <Box mt="30px" p={10} ml="10%">
                  <Heading fontSize="md" fontWeight="light" mb="10px" >HOTJAR GUIDES</Heading>
                  <Image w="70%" src='https://insights.hotjar.com/static/37d85d9a61db85c93d7f.png'/>
                  <Heading fontSize="lg" fontWeight="semibold" mt="10px">Guides to learn more about Hotjar</Heading>
                  
                  <Container mt="10px" ml="-2%" textAlign="left">Check out our guides to better understand user behavior, make the right changes, improve UX, and increase conversions on your website and product.</Container>
                  <Button mt="10px" colorScheme='blue' variant='outline'>Explore Guides</Button>
                  
              </Box>
            </VStack>
          
          
            
        </Flex>
    </Container>
   
    </>
  )
}

export default SignIn
