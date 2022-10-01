import React from 'react'
import { Container,Button,Grid,GridItem,AspectRatio,Flex,Image,Box, Divider, Heading, Spacer, Stack, Text, Icon, Link } from '@chakra-ui/react'
import {FaGoogle} from "react-icons/fa"
import { keyframes } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
  Collapse
} from '@chakra-ui/react'


const Dashboard = () => {
  
    const { isOpen, onToggle } = useDisclosure()
  
  // console.log(images)
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
    <>
    <Box mt="10%" mb={10}>
      <Heading fontWeight="normal" textAlign="center">Hotjar is trusted by 731,084 websites in 180+ countries</Heading>
    </Box>
    <Box style={{ height:"100px",
    margin:"auto",
    overFlow: "hidden",
    position: "relative",
    width: "auto",
    
    
    
    }}>
       
        <div style={{
           
           display: "flex",
           width: "calc(250px*14)",
        }}>
            <div style={
              {height: "100px",
                width: "250px",}
            }>
              <img src="https://images.ctfassets.net/lh3zuq09vnm2/6Id0eTlVwUSuDcoeLXS6wh/ab8d55b51fbc0e2bc599a6f180ef6c99/Invision.svg"/>
            </div>
            <div style={
              {height: "100px",
                width: "250px",}
            } >
              <img src="https://images.ctfassets.net/lh3zuq09vnm2/7siImqwRupwoBHyJCaO1zy/2d7ec1ccc7761f76c8fe18de52e889a4/T-Mobile.svg"/>
            </div>
            <div style={
              {height: "100px",
                width: "250px",}
            }>
              <img src="https://images.ctfassets.net/lh3zuq09vnm2/7dsuPwH4V8KJvCexSZueZc/272b2ef619de8ae4b443758413a19733/Unbounce_Logo.svg"/>
            </div>
            <div style={
              {height: "100px",
                width: "250px",}
            }>
              <img src="https://images.ctfassets.net/lh3zuq09vnm2/3A5yNJ7WfWikTXKsk7r4hh/4060c710bc560b59a0dd06b6521fbe94/Decathlon.svg"/>
            </div>
            <div style={
              {height: "100px",
                width: "250px",}
            }>
              <img src="https://images.ctfassets.net/lh3zuq09vnm2/7hhEfCdZPI7mPC24fFsC94/adf392604ef673a224307e48ac87bd96/Adobe.svg"/>
            </div>
            <div style={
              {height: "100px",
                width: "250px",}
            }>
              <img src="https://images.ctfassets.net/lh3zuq09vnm2/5F3AqUH61Ll0Oa6eRQKyuT/7ea7e484e1e46495ed4fae2a1162a575/TechSmith.svg"/>
            </div>
            <div style={
              {height: "100px",
                width: "250px",}
            }>
              <img src="https://images.ctfassets.net/lh3zuq09vnm2/18dCY8kGkSbfdNB2Eod1Pp/4768154e8873caa4c1574499dc4e2aab/Microsoft_Logo.svg"/>
            </div>
            <div style={
              {height: "100px",
                width: "250px",}
            }>
              <img src="https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg"/>
            </div>
        </div>
    </Box>
    </>
   <>
   <Grid templateColumns='repeat(2, 1fr)' gap={10} >
            <GridItem w="200%" >
            <AspectRatio maxW='800px' maxH="600px" ratio={1} >
                <iframe
                
                  title='why hotjar'
                  src='https://videos.ctfassets.net/lh3zuq09vnm2/4qQy2K5TTJA4TvrqtAvptj/826fa8d309ce2368ea14756a727706a3/incoming_feedback_1.mp4'
                  allowFullScreen
                  autoplayLoop
                  
                />
                
                </AspectRatio>
            </GridItem>
            
            <GridItem w="70%" ml="20%" mt="2%">
            <Heading mb="10%" textAlign="center">Hear's how it works</Heading>
            <Accordion allowToggle>
          <AccordionItem border="solid grey 1px" mt="3" borderRadius="8" p={1}>
            <h2>
              <AccordionButton >
                <Box flex='1' textAlign='left' >
                  <Flex>
                  <Image mr="3" src='https://images.ctfassets.net/lh3zuq09vnm2/3fvft31gR35Q9BjAxVk4Zw/9f93e529be4989f97d5743844699cf2a/icon-heatmaps.svg'/>
                  Find out what's hot and what's not
                
                  </Flex>
                  </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Heatmaps give you an at-a-glance overview of how people interact with a page.
                <br/>
                <br />
           See how far they scroll, what buttons they click, and what content gets ignored.
                 <br/>
                <br />
                <Link color="blue">Heatmaps</Link>
            
            </AccordionPanel>
          </AccordionItem>

            <AccordionItem border="solid grey 1px" mt="3" borderRadius="8" p={1}>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                  <Flex>
                  <Image mr="3" src='https://images.ctfassets.net/lh3zuq09vnm2/76fQfkmWFtHn8xYHEbbzA0/f17539a8253616c98a87062824619972/icon-recordings.svg'/>
                  See what your visitors see
                
                  </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              Recordings let you experience your website through the eyes of your site visitors.
                <br/>
                <br />
                See their mouse movements, which pages they visit, and where they struggle.
                 <br/>
                <br />
                <Link color="blue">Recordings</Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="solid grey 1px" mt="3" borderRadius="8" p={1}>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                  <Flex>
                  <Image mr="3" src='https://images.ctfassets.net/lh3zuq09vnm2/6hX51iaEPtQHWldsN5Fy3Y/3a66ea3c6ba95bad60f90d9c31113980/icon-incoming-feedback.svg'/>
                  Collect live feedback
                
                  </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              Add feedback widgets to key pages to learn exactly how people feel about them.
                <br/>
                <br />
                If anything’s confusing or off-putting, you’ll find out fast.
                 <br/>
                <br />
                <Link color="blue">Feedback</Link>
              </AccordionPanel>
            </AccordionItem>


            <AccordionItem border="solid grey 1px" mt="3" borderRadius="8" p={1}>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                  <Flex>
                  <Image mr="3" src='https://images.ctfassets.net/lh3zuq09vnm2/4GnWgWvkXM73x24INz3sRL/6b75469d7c0687f5be4969ac67b72a61/surveys.svg'/>
                  Bring customers into the discussion
                
                  </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              Validate your plans, measure customer satisfaction, and collect ideas for what to work on next.
                <br/>
                <br />
                Launch via popup or share a link.
                 <br/>
                <br />
                <Link color="blue">Surveys</Link>
              </AccordionPanel>
            </AccordionItem>

              </Accordion>
            </GridItem>
         </Grid>
           </>
              <>
              <Box textAlign="center" mt="8%">
              <Heading mb="3">Your job just got easier</Heading>
              
              <p>See how Hotjar helps you at every step</p>
              </Box>
              </>
              <>
              <Grid mt="10" templateColumns='repeat(4, 1fr)' gap={10}>
                <GridItem>
                  <Container border="solid grey 1px" p={5} >
                    <Box mb="30%" >
                    <Image src='https://images.ctfassets.net/lh3zuq09vnm2/6GhBV0EUl0TdlV1CBi2XjH/0d6fb458cc95ea2553b152521ea04df5/Homepage_JTBD_Identifyopportunities.svg'/>
                    <Text fontSize="25">Uncover opportunities for optimization</Text>
                    </Box>
                    
                    <Link color="blue">Get inspired</Link>
                  </Container>
                </GridItem>
                <GridItem>
                <Container border="solid grey 1px" p={5}>
                  <Box mb="30%">
                    <Image src='https://images.ctfassets.net/lh3zuq09vnm2/4aUF37DqborFULF8YtdTd7/cbc41dbd27477fd25d4bde0b167f294d/Homepage_JTBD_spotproblems.svg'/>
                    <Text fontSize="25">Spot problems with your customer experience</Text>
                    </Box>
                    <Link color="blue">Discover issues</Link>
                  </Container >
                  </GridItem>
                <GridItem>
                <Container border="solid grey 1px" p={5}>
                  <Box mb="30%">
                    <Image src='https://images.ctfassets.net/lh3zuq09vnm2/5PfNtBF7nuR2dYc8IzAOST/2e217185e10729f2b054e3d4ef2dc703/Homepage_JTBD_Prioritize.svg'/>
                    <Text fontSize="25">Prioritize changes that matter</Text>
                    </Box>
                    <Link color="blue">Act with confidence</Link>
                  </Container>
                </GridItem>
                <GridItem>
                <Container border="solid grey 1px" p={5}>
                <Box mb="30%">
                    <Image src='https://images.ctfassets.net/lh3zuq09vnm2/39myT6tK3sA17rN9mbIcSe/121b6f314cf2f1a4023befb65e9ad1f5/Homepage_JTBD_convince.svg'/>
                    <Text fontSize="25">Get buy-in for your next big idea</Text>
                    </Box>
                    <Link color="blue">Convince the team</Link>
                  
                  </Container>
                </GridItem>
              </Grid>
                
              
              </>
              


     </Box>
     </>
  )
}

export default Dashboard


