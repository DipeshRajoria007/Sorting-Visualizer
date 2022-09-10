import {
  Box,
  Button,
  Flex,
  Select,
  FormControl,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SideBar = ({ generating, sorting, generateArray, sort ,setInfo }) => {
    
  const [formState, setFormState] = useState({ size: 10, algorithm: "BubbleSort" });
  
//   const algorithm = (formState) => {
//     switch (formState.algorithm) {
//       case "BubbleSort":
//         return "BubbleSort";

//       case "InsertionSort":
//         return "InsertionSort";
      
//       case "SelectionSort":
//         return "SelectionSort";
//     }
//   };

  return (
    <Box minW="xs" bg="gray.100" p={"4"} borderRadius="lg" overflow="hidden">
      <FormControl>
        <FormLabel htmlFor="size">{`Array size (${formState.size})`}</FormLabel>
        <Slider
          onChangeEnd={(v) => setFormState({ ...formState, size: v })}
          aria-label={"10"}
          min={10}
          max={200}
          defaultValue={10}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="Algorithm">Algorithm</FormLabel>
        <Select
          onClick={(v) => {
            setFormState({ ...formState, algorithm: v.target.value });
            setInfo(v.target.value);
        }}
          bg={"white"}
          id="algorithm"
          variant={"outline"}
        >
          <option value="BubbleSort">BubbleSort</option>
          <option value="SelectionSort">SelectionSort</option>
          <option value="InsertionSort">InsertionSort</option>
        </Select>
      </FormControl>
      <Flex gap={"3"} mt={"5"} direction="row">
        <Button onClick={() => generateArray(formState)} colorScheme="purple">
          {generating ? <Spinner />  : "Generate"}
        </Button>
        <Button onClick={()=>{sort(formState.algorithm) 
        }} colorScheme="purple" variant="outline">
          { sorting ? <Spinner /> : "Sort"}
        </Button>
      </Flex>
    </Box>
  );
};
export default SideBar;
