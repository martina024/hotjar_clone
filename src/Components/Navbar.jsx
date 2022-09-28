import React from 'react'
import { VStack ,Flex, Heading, Spacer,Stack,Button, Menu,
  MenuButton,
  MenuList,
  MenuItem,Image} from "@chakra-ui/react";
import {FaSun,FaMoon} from "react-icons/fa"
import {useColorMode} from "@chakra-ui/color-mode"
import {IconButton} from "@chakra-ui/button"
import {ChevronDownIcon} from "@chakra-ui/icons"
import Signin from "../Pages/SignIn";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark=colorMode==="dark"
  return (
    <VStack p={5} >
    <Flex w="100%">
      <Image ml="8" boxSize='2.5rem'src="https://assets.stickpng.com/images/62c9db2694890221ddd176b1.png" ></Image>
      <Heading size="lg" fontWeight="semibold">hotjar</Heading>
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
        <MenuButton size="lg"  as={Button} rightIcon={<ChevronDownIcon />}>
        Company
      </MenuButton>
        </Menu>

      
      <Spacer></Spacer>
    <Stack direction='row' spacing={4} align='center'>
    <Button as='a' target='_blank'  href={<Signin />} colorScheme='teal' fontWeight='bold' variant='outline'>
        Sign in
      </Button>
      
      <Button colorScheme='teal' variant='solid'>
        Get started free
      </Button>
    
    </Stack>
    <IconButton ml="2%" icon={isDark ? <FaSun/>:<FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
 
    </Flex>
 </VStack>
);
  
}

export default Navbar
