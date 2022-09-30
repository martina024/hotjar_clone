import React from 'react'
import { VStack ,Flex, Heading, Spacer,Stack,Button, Menu,
  MenuButton,
  MenuList,
  MenuItem,Image,Box, background} from "@chakra-ui/react";
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
   
     
      <Menu>
      <MenuButton _disabled size="lg" bg="none" ml="8" as={Button} rightIcon={<ChevronDownIcon />}>
        Product
      </MenuButton>
      </Menu>
      {/* <MenuList> */}
        {/* <MenuItem minH='48px'>
          <Image
            boxSize='2rem'
            borderRadius='full'
            src='https://placekitten.com/100/100'
            alt='Fluffybuns the destroyer'
            mr='1270px'
          />
          <span>Fluffybuns the Destroyer</span>
        </MenuItem> */}
        {/* <MenuItem minH='40px'>
          <Image
            boxSize='2rem'
            borderRadius='full'
            src='https://placekitten.com/120/120'
            alt='Simon the pensive'
            mr='12px'
          />
          <span>Simon the pensive</span>
        </MenuItem> */}
      {/* </MenuList> */}
      <Menu>
      <MenuButton size="lg" bg="none"  as={Button} rightIcon={<ChevronDownIcon />}>
        Why Hotjar
      </MenuButton>
      </Menu>

      <Menu>
      <MenuButton size="lg" bg="none"  as={Button} rightIcon={<ChevronDownIcon />}>
        Pricing
      </MenuButton>
        </Menu>

        <Menu>
        <MenuButton size="lg" bg="none"  as={Button} rightIcon={<ChevronDownIcon />}>
        Learn
      </MenuButton>
        </Menu>

        <Menu>
        <MenuButton size="lg" bg="none" as={Button} rightIcon={<ChevronDownIcon />}>
        Company
      </MenuButton>
        </Menu>

      
      <Spacer></Spacer>
    <Stack direction='row' spacing={4} align='center'>
      <Link to="/signin">
      <Button  colorScheme='messenger' fontWeight='bold' variant='outline'>
        Sign in
      </Button>
      </Link>
    
      
      <Button  variant='solid'>
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
