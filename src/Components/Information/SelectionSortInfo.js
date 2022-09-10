import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
const SelectionSortInfo = () => {
  return (
    <Flex gap={"4"} direction={["column", "row"]}>
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
            href="https://en.wikipedia.org/wiki/Selection_sort"
            target="_blank"
            rel="noopener noreferrer"
          >
            SelectionSort
          </a>
        </Heading>
        <Text fontSize="xl" mt={"2"} color="gray.600">
          is an in-place comparison sorting algorithm that divides the input
          list into two parts: the sublist of items already sorted, which is
          built up from left to right at the front (left) of the list, and the
          sublist of items remaining to be sorted that occupy the rest of the
          list. Initially, the sorted sublist is empty and the unsorted sublist
          is the entire input list. The algorithm proceeds by finding the
          smallest element in the unsorted sublist, exchanging (swapping) it
          with the leftmost unsorted element (putting it in sorted order), and
          moving the sublist boundaries one element to the right.
        </Text>
      </Box>
      <Box
        minW="xs"
        bg="gray.100"
        p={"4"}
        borderRadius="lg"
        overflow="hidden"
        p={"4"}
        mt={"4"}
      >
        <Heading as="b" as="i" fontSize="3xl" color="gray.600">
          Time Complexity :
        </Heading>
        <Text fontSize="xl" mt={"2"} color="gray.600">
          worstCase: (
          <span>
            O(n<sup>2</sup>)
          </span>
          ) <br />
          avgCase: (
          <span>
            O(n<sup>2</sup>)
          </span>
          ) <br /> bestCase: (
          <span>
            O(n<sup>2</sup>)
          </span>
          )
          <br />{" "}
          <Text as="i" fontSize="xl">
            space: <span>O(1)</span>{" "}
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default SelectionSortInfo;
