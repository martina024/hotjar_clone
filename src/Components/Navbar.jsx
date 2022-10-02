import React from 'react'
import { VStack ,Flex, Heading, Spacer,Stack,Button, Menu,
  MenuButton,
  MenuList,
  MenuItem,Image,Box, Grid, GridItem} from "@chakra-ui/react";
import {FaSun,FaMoon} from "react-icons/fa"
import {useColorMode} from "@chakra-ui/color-mode"
import {IconButton} from "@chakra-ui/button"
import {ChevronDownIcon} from "@chakra-ui/icons"


import { Link } from 'react-router-dom';


  




const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark=colorMode==="dark"


  return (
    <>
    <Box position="sticky" top="0"
   bg={isDark? "#1A202C" : "white"}
    zIndex={10}
   shadow="base"

    >
    
      <VStack p={10}>
    <Flex w="100%">
     
      <Image  src="https://yt3.ggpht.com/eH_MdhjC_DxpUtxBNXqb7fhhfKSa-nWiIQ1IqaRxD06nEbFiIRahQf5bUHE1WPpnfczXsvUdYA=s176-c-k-c0x00ffffff-no-rj"ml="10"  boxSize='2.5rem'  ></Image>
      <Link to="/"> <Heading size="lg" fontWeight="semibold">hotjar</Heading></Link>
   
     
      <Menu >
      <MenuButton _disabled size="lg" bg="none" ml="8" as={Button} rightIcon={<ChevronDownIcon />}>
        Product
      </MenuButton>
      
      <MenuList  > 
         <MenuItem minH='25rem' minW="95em" >
          
       <Grid templateColumns='repeat(4, 1fr)' gap={6} w="200%" ml="5%" fontSize="150%">
        <GridItem >
            <img src="https://images.ctfassets.net/lh3zuq09vnm2/1mcY2mB8771rpkc01WpaAC/c0803cf3d2f110c3251d6095400b2f7d/Rocket-ember.svg" alt="" />
            <h1 style={{fontWeight:"bold"}}>Product tour</h1>
            <h3>See all Hotjar has to offer</h3>
        </GridItem>
        <GridItem>
          <div style={{marginBottom:"10px"}}>
            <button style={{border:"0",backgroundColor:"#FFF9C4" ,padding:"7px",fontWeight:"bold"}}>Observe</button>
          </div>
          <hr />
          <br />
         <div>
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/3fvft31gR35Q9BjAxVk4Zw/9f93e529be4989f97d5743844699cf2a/icon-heatmaps.svg" alt="" />
          <h1 style={{fontWeight:"bold"}}>Heatmaps</h1>
          <h3>Visualize user behaviour</h3>
         </div>
            <br />
         <div>
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/76fQfkmWFtHn8xYHEbbzA0/f17539a8253616c98a87062824619972/icon-recordings.svg" alt="" />
          <h1 style={{fontWeight:"bold"}}>Recordings</h1>
          <h3>See what your users see</h3>
         </div>
         
        
        </GridItem>
        <GridItem>
          <div style={{marginBottom:"10px"}}>
            <button style={{fontWeight:"bold",border:"0",backgroundColor:"#C5CAE9" ,padding:"7px"}}>Ask</button>
          </div>
          <hr />
          <br />
         <div>
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/6hX51iaEPtQHWldsN5Fy3Y/3a66ea3c6ba95bad60f90d9c31113980/icon-incoming-feedback.svg" alt="" />
          <h1 style={{fontWeight:"bold"}}>Feedback</h1>
          <h3>Discover how your users feel</h3>
         </div>
            <br />
         <div>
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/5sO4egYUhUh5eBDtoPB4RS/3102e823999e1e700e876eef2fcb83af/icon-surveys.svg" alt="" />
          <h1 style={{fontWeight:"bold"}}>Surveys</h1>
          <h3>Hear from your users</h3>
         </div>
         
        
        </GridItem>
        <GridItem>
          <div style={{marginBottom:"10px"}}>
            <button style={{fontWeight:"bold",border:"0",padding:"7px"}}><br/></button>
          </div>
          <hr />
          <br />
         <div>
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/2OXb4DK3kqPZI9XZwKDmBR/aa08742d712d15824a5605c8fa8a86b2/icon-integrations.svg" alt="" />
          <h1 style={{fontWeight:"bold"}}>Integrations</h1>
          <h3>Discover dozens of integrations</h3>
         </div>
            <br />
         <div>
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/5kcQPD6YgY51U3d4ifrkii/5e412e881ace5932492c58c86030d41d/icon-survey-templates.svg" alt="" />
          <h1 style={{fontWeight:"bold"}}>Surveys templates</h1>
          <h3>Launch successful surveys faster</h3>
         </div>
         
        
        </GridItem>
       </Grid>


        
        </MenuItem> 
       
      
       </MenuList> 
       </Menu>
      <Menu>
      <MenuButton size="lg" bg="none"  as={Button} rightIcon={<ChevronDownIcon />}>
        Why Hotjar
      </MenuButton>

      <MenuList  > 
         <MenuItem minH='25rem' minW="95em">
          
       <Grid templateColumns='repeat(4, 1fr)' gap={6} w="200%" ml="5%" fontSize="150%">
        <GridItem >
          <div >
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/2tNvAdB4QZnKkk8er4q3SY/00972c63148acdd80bba5deb1e3ca20d/Product_teams_.svg" alt="" />
            <h1 style={{fontWeight:"bold"}}>For product teams</h1>
            <h3>Collaborate on user insights</h3>
          </div>
          <br />
          <br />
          <div>
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/7bu3ttUQaMiusVYgmA5W0E/cb5706443bda65ea5dd0dd4c4ee73ca3/icon-case-studies.svg" alt="" />
            <h1 style={{fontWeight:"bold"}}>Case studies</h1>
            <h3>Learn how others use Hotjar</h3>
          </div>
           
        </GridItem>
        <GridItem>
          
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/rei0bZGIntzeRG0WxjqMU/458bf0957e41b9a5fb0322613df89ebf/icon-product-management.svg" alt="" />
          <h1 style={{fontWeight:"bold"}}>For product managers</h1>
          <h3>Build products users love</h3>
         
         
        
        </GridItem>
        <GridItem>
          
         <div>
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/2zSp0IQk0E9iOi36cn8n4n/eb85b848d9853ec849a934feeca55f4e/icon-product-design.svg" alt="" />
          <h1 style={{fontWeight:"bold"}}>For product designers</h1>
          <h3>Create designs that resonate</h3>
         </div>
         
        
        </GridItem>
        <GridItem>
         
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/7cgrCG4MpaK39UueExbDYI/71315bdec4d36e36cf57a23195cc92a4/icon-research.svg"  alt="" />
          <h1 style={{fontWeight:"bold"}}>For researchers</h1>
          <h3>Discover insights others miss</h3>
         
         
        
        </GridItem>
       </Grid>


        
        </MenuItem> 
       
      
       </MenuList> 
      </Menu>

      <Menu>
      <MenuButton size="lg" bg="none"  as={Button} >
        Pricing
      </MenuButton>
        </Menu>

        <Menu>
        <MenuButton size="lg" bg="none"  as={Button} rightIcon={<ChevronDownIcon />}>
        Learn
      </MenuButton>
      <MenuList  > 
         <MenuItem minH='25rem' minW="95em">
          
       <Grid templateColumns='repeat(4, 1fr)' gap={6} w="200%" ml="5%" fontSize="150%">
        <GridItem >
          <div >
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/29cHXX50MaQFbFbNuuEobF/ef757d222544a89e87e2c23642a499eb/icon-guides.svg" alt="" />
            <h1 style={{fontWeight:"bold"}}>Guides</h1>
            <h3>Get the most out of Hotjar</h3>
          </div>
          <br />
          <br />
          <div>
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/77BtJYrFoyCLErPB8o2dnA/4621264b773c3f9625ce987ece5bb4b6/Support.svg" alt="" />
            <h1 style={{fontWeight:"bold"}}>Support</h1>
            <h3>Learn how to set up and use Hotjar</h3>
          </div>
           
        </GridItem>
        <GridItem>
        <div >
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/6E1bW5je6USepU41R2psoP/025fc489632d42f5455f7253653477a9/Blog.svg" alt="" />
            <h1 style={{fontWeight:"bold"}}>Blog</h1>
            <h3>News,analysis,tips and tutorials</h3>
          </div>
          <br />
          <br />
          <div>
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/01sD7ikwsm8A9PzqXxeovt/d718ae8df27d248c66166bddf71aac42/Vector.svg" alt="" />
            <h1 style={{fontWeight:"bold"}}>Hotjar learning</h1>
            <h3>Courses to help you flourish</h3>
          </div>
         
         
         
        
        </GridItem>
        <GridItem>
          
         <div>
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/69OiEBqKuuE9y84cHDYFYD/8fb8702f45048de7342abacc186e7f78/Product-forge.svg" alt="" />
          <h1 style={{fontWeight:"bold"}}>Product forge</h1>
          <h3>Cutting-edge product insights</h3>
         </div>
         
        
        </GridItem>
        <GridItem>
         
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/6WkKq86kztFCChLxHqxJ53/63ffc9f2001da8b5ad7292d53808278c/updates.svg"  alt="" />
          <h1 style={{fontWeight:"bold"}}>Product updates</h1>
          <h3>What's new</h3>
         
         
        
        </GridItem>
       </Grid>


        
        </MenuItem> 
       
      
       </MenuList>
        </Menu>

        <Menu>
        <MenuButton size="lg" bg="none" as={Button} rightIcon={<ChevronDownIcon />}>
        Company
      </MenuButton>

      <MenuList  > 
         <MenuItem minH='25rem' minW="95em">
          
       <Grid templateColumns='repeat(4, 1fr)' gap={6} w="200%" ml="5%" fontSize="150%">
        <GridItem >
          <div >
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/3qWNbUV9OgVmvQ239eLBB5/fb934659e54eefeb1defb835e01728aa/icon-about-us.svg" alt="" />
            <h1 style={{fontWeight:"bold"}}>About us</h1>
            <h3>Get to know us</h3>
          </div>
          
          
         
           
        </GridItem>
        <GridItem>
        <div >
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/2VlR1cp2kOyuAqTevJOVVe/51b73081ac97b801e1a31d40b655ce2d/Careers.svg" alt="" />
            <h1 style={{fontWeight:"bold"}}>Careers</h1>
            <h3>Join us</h3>
          </div>
         
         
         
         
        
        </GridItem>
        <GridItem>
          
         <div>
         <img src="https://images.ctfassets.net/lh3zuq09vnm2/3jLDll20Xgpw6cu2G9HqjC/6e2e55dcec34b9857e96dc9b42b629db/Privacy.svg" alt="" />
          <h1 style={{fontWeight:"bold"}}>Privacy</h1>
          <h3>Our approach to end-user privacy</h3>
         </div>
         
        
        </GridItem>
       
       </Grid>


        
        </MenuItem> 
       
      
       </MenuList>
        </Menu>

      
      <Spacer></Spacer>
    <Stack direction='row' spacing={4} align='center'>
      <Link to="/signin">
      <Button  colorScheme='messenger' fontWeight='bold' variant='outline'>
        Sign in
      </Button>
      </Link>
    
      
      <Button  variant='solid' colorScheme='messenger'>
        Get started free
      </Button>
    
    </Stack>
    <IconButton ml="2%" icon={isDark ? <FaSun/>:<FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
 
    </Flex>
  </VStack>
 
    </Box>
  
    
    </>
);
  
}

export default Navbar
