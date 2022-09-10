import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
const InsertionSortInfo = () => {
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
            href="https://en.wikipedia.org/wiki/Insertion_sort"
            target="_blank"
            rel="noopener noreferrer"
          >
            InsertionSort
          </a>
        </Heading>
        <Text fontSize="xl" mt={"2"} color="gray.600">
          is a simple sorting algorithm that iterates through an array and at
          each iteration it removes one element from the array, finds the
          location it belongs to in the sorted list and inserts it there,
          repeating until no elements remain in the unsorted list. It is an
          in-place, stable sorting algorithm that is inefficient on large input
          arrays but works well for data sets that are almost sorted. It is more
          efficient in practice compared to other quadratic sorting algorithms
          like bubble sort and selection sort.
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
          )
          <br/>
          avgCase: (
          <span>
            O(n<sup>2</sup>)
          </span>
          )
          <br/>
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

export default InsertionSortInfo;
