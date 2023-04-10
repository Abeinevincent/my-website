import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PrimaryYellowColor } from "../../theme/GlobalStyles";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionChange = (index: any) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const faqsData = [
    {
      question: "What is the meaning of life?",
      answer:
        "That's a philosophical question that has puzzled humanity for centuries. The answer is subjective and varies depending on who you ask.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions.",
    },
    {
      question: "What is the best programming language?",
      answer:
        "That's a subjective question and depends on your goals and preferences. Some popular programming languages include JavaScript, Python, Java, and C++.",
    },
  ];

  return (
    <Box
      w={{ base: "95%", md: "80%", lg: "60%" }}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      h="100%"
      margin={"auto"}
    >
      <Box>
        <Tabs>
          <Flex justify={"flex-start"}>
            <TabList
              w={{ base: "100%", lg: "100%" }}
              border={"none"}
              overflow={"hidden"}
            >
              <Tab fontSize={14}>All</Tab>
              <Tab fontSize={14}>Donations</Tab>
              <Tab fontSize={14}>Courses</Tab>
            </TabList>
          </Flex>

          <TabPanels>
            <TabPanel>
              <Box p={6} pl={0} flex={1}>
                <Heading mb={6} overflow="hidden">
                  Frequently Asked Questions
                </Heading>
                <Accordion allowToggle onChange={handleAccordionChange}>
                  {faqsData.map((faq: any, index: any) => (
                    <AccordionItem key={index} border="none">
                      <AccordionButton
                        py={4}
                        _focus={{ boxShadow: "none" }}
                        fontWeight={activeIndex === index ? "bold" : "normal"}
                      >
                        <Box flex="1" textAlign="left">
                          {faq.question}
                        </Box>
                        <AccordionIcon
                          as={activeIndex === index ? MinusIcon : AddIcon}
                          boxSize={4}
                          color="gray.500"
                        />
                      </AccordionButton>
                      <AccordionPanel
                        pb={4}
                        fontWeight="normal"
                        display={activeIndex === index ? "block" : "none"}
                      >
                        {faq.answer}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            </TabPanel>

            <TabPanel>
              <Box p={6} pl={0} flex={1}>
                <Heading mb={6} overflow="hidden">
                  Frequently Asked Questions
                </Heading>
                <Accordion allowToggle onChange={handleAccordionChange}>
                  {faqsData.map((faq: any, index: any) => (
                    <AccordionItem key={index} border="none">
                      <AccordionButton
                        py={4}
                        _focus={{ boxShadow: "none" }}
                        fontWeight={activeIndex === index ? "bold" : "normal"}
                      >
                        <Box flex="1" textAlign="left">
                          {faq.question}
                        </Box>
                        <AccordionIcon
                          as={activeIndex === index ? MinusIcon : AddIcon}
                          boxSize={4}
                          color="gray.500"
                        />
                      </AccordionButton>
                      <AccordionPanel
                        pb={4}
                        fontWeight="normal"
                        display={activeIndex === index ? "block" : "none"}
                      >
                        {faq.answer}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            </TabPanel>

            <TabPanel>
              <Box p={6} pl={0} flex={1}>
                <Heading mb={6} overflow="hidden">
                  Frequently Asked Questions
                </Heading>
                <Accordion allowToggle onChange={handleAccordionChange}>
                  {faqsData.map((faq: any, index: any) => (
                    <AccordionItem key={index} border="none">
                      <AccordionButton
                        py={4}
                        _focus={{ boxShadow: "none" }}
                        fontWeight={activeIndex === index ? "bold" : "normal"}
                      >
                        <Box flex="1" textAlign="left">
                          {faq.question}
                        </Box>
                        <AccordionIcon
                          as={activeIndex === index ? MinusIcon : AddIcon}
                          boxSize={4}
                          color="gray.500"
                        />
                      </AccordionButton>
                      <AccordionPanel
                        pb={4}
                        fontWeight="normal"
                        display={activeIndex === index ? "block" : "none"}
                      >
                        {faq.answer}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>

              <Box display={"flex"} justifyContent="center">
                <Button
                  backgroundColor="transparent"
                  border={`2px solid ${PrimaryYellowColor}`}
                  color={PrimaryYellowColor}
                  fontWeight={400}
                  variant="solid"
                  mt={5}
                  overflowY={"hidden"}
                  p={5}
                  height={8}
                  borderRadius={0}
                  w="50%"
                  _hover={{
                    backgroundColor: PrimaryYellowColor,
                    color: "white",
                  }}
                >
                  Load More Blogs
                </Button>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Faq;
