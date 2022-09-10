import React from "react";
import { Box } from "@chakra-ui/react";

const Visualizer = ({ data }) => {
  return (
    <Box
      rounded={"lg"}
      display="grid"
      gridAutoFlow={"column"}
      gridAutoColumns={"auto"}
      bg="gray.100"
      minH={"full"}
      overflow={"auto"}
      flex="1"
    >
      {data.map((d) => {
        return (
          <Box key={d}
            display={"flex"}
            justify-content="flex-end"
            text-align="center"
            flexDirection="column-reverse"
          >
            
            <Box
              roundedTop={"sm"}
              border={"1px"}
              borderColor={"white"}
              bg={"purple"}
              style={{ height: `${d*2.5}px` }}
              className="graph"
            ></Box>
            <p text-align="center" >{d}</p>

          </Box>
        );
      })}
    </Box>
  );
};

export default Visualizer;
