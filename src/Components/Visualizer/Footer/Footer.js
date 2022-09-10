import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiCool } from "react-icons/bi";

import { Box, Text, Heading, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex flexDirection="column" alignItems="center" mt="25" width="100%">
      <Heading fontSize="xl" as="i">
        Sorting Visualizer
      </Heading>
      <Flex direction="row" gap={3} my={"2"} >
        <Text color="gray.500" as="del" letterSpacings="wider">
          Made with 💚
        </Text>
        <Text> Made for Practice 💪 </Text>
      </Flex>
      <Flex fontSize="2xl"  direction="row" color="gray.600" gap={3}>
        <Link href="https://github.com/DipeshRajoria007">
          <AiFillGithub />
        </Link>
        <Link href="https://dipeshrajoria007.github.io/MyPortfolio/">
          <BiCool />
          </Link>
          <Link href="https://www.linkedin.com/in/dipesh-rajoria-175b60192/">
            <AiFillLinkedin />{" "}
          </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
