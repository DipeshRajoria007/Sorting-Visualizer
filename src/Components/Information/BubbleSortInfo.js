import React from "react";
import { Box, Text, Heading ,Flex } from "@chakra-ui/react";
const BubbleSort = () => {
  return (
    <Flex gap={"4"} direction={["column", "row"]} >
      <Box
        minW="xs"
        bg="gray.100"
        mt={"4"}
        p={"4"}
        borderRadius="lg"
        overflow="hidden"
      >
        <Heading as="b" as="i" fontSize="3xl" color="gray.600">
          <a
            href="https://en.wikipedia.org/wiki/Bubble_sort"
            target="_blank"
            rel="noopener noreferrer"
          >
            BubbleSort
          </a>
        </Heading>
        <Text fontSize="xl" mt={"2"} color="gray.600">
          is a simple sorting algorithm that repeatedly steps through the list,
          compares adjacent elements and swaps them if they are in the wrong
          order.The pass through the list is repeated until the list is sorted.
          The algorithm, which is a comparison sort, is named for the way smaller
          or larger elements "bubble" to the top of the list. Although the
          algorithm is simple, it is too slow and impractical for most problems
        </Text>
      
      </Box>
      <Box minW="xs" bg="gray.100" p={"4"} borderRadius="lg" overflow="hidden" p={"4"} mt={"4"} >
      <Heading as="b" as="i" fontSize="3xl" color="gray.600">

          Time Complexity :
        </Heading>
        <Text fontSize="xl" mt={"2"} color="gray.600" >
          worstCase: (
          <span>
            O(n<sup>2</sup>)
          </span>
          )
          <br />
          avgCase: (
          <span>
            O(n<sup>2</sup>)
          </span>
          )
          <br />
          bestCase: <span>O(n)</span>
          <br/>
          
          <Text as="i" fontSize="xl">
            space: <span>O(1)</span>{" "}
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default BubbleSort;
