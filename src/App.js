import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Visualizer from "./Components/Visualizer/Visualizer";
import { Box, Button, Flex, Select } from "@chakra-ui/react";
import BubbleSortInfo from "./Components/Information/BubbleSortInfo"; 
import InsertionSortInfo from "./Components/Information/InsertionSortInfo"
import SelectionSortInfo from "./Components/Information/SelectionSortInfo";
import Footer from "./Components/Visualizer/Footer/Footer";

function App() {
  const [array, setArray] = useState([]);
  const [generating, setGenerating] = useState(false);
  const [sorting, setSorting] = useState(false);
  const [info,setInfo] = useState("BubbleSort");

  // generating Array
  const generateArray = (formState) => {
    setGenerating(true);
    setTimeout(() => {
      let newArray = [];
      while (newArray.length <= formState.size) {
        let random = Math.floor(Math.random() * (200 - 10) + 10);
        if (newArray.indexOf(random) == -1) newArray.push(random);
      }
      setArray([...newArray]);
      setGenerating(false);
    }, 500);
  };
  useEffect(() => {
    generateArray({ size: 10 });
  }, []);

  const BubbleSort = () => {
    setTimeout(() => {
      setSorting(true);
      let newArray = [...array];
      for (let i = 0; i < newArray.length; i++) {
        setTimeout(() => {
          for (let j = i + 1; j < newArray.length; j++) {
            
            
            let arr2 = document.getElementsByClassName("graph")[j];
            arr2.style.backgroundColor="red";
            setTimeout(() => {
              arr2.style.backgroundColor="purple";
              
              if (newArray[i] > newArray[j]) {
                
               
                let temp = newArray[i];
                newArray[i] = newArray[j];
                newArray[j] = temp;
                let newStep = [...newArray];
                
                
                setTimeout(() => {
                  setArray([...newArray]);
                }, j * 100);
                
                setSorting(false);
              }
            },500);
            }
            
          }, i * 1000);
      }
    }, 500);
  };

  //  insertion Sort function

  function SelectionSort() {
    setSorting(true);
    let min;
    let arr = [...array];
    //start passes.
    setTimeout(() => {
      for (let i = 0; i < arr.length; i++) {
        
        //index of the smallest element to be the ith element.
        
        min = i;
        
        //Check through the rest of the array for a lesser element
        setTimeout(() => {
          let arr2 = document.getElementsByClassName("graph")[min];
          arr2.style.backgroundColor="red";
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
              min = j;
            }
          }

          //compare the indexes
          if (min !== i) {
            //swap
            [arr[i], arr[min]] = [arr[min], arr[i]];
            setTimeout(() => {
              
              setArray([...arr]);
              arr2.style.backgroundColor="purple";
            }, 500);
          }
        }, i * 1000);
      }
      
    }, 1000);

    console.log("selectionSort");

    // return arr;
  }

  // insertion sort function
  function InsertionSort() {
    setSorting(true);
    let arr = array;
    //Start from the second element.
    setTimeout(() => {
      for (let i = 1; i < arr.length; i++) {
        let arr2 = document.getElementsByClassName("graph")[i];
          arr2.style.backgroundColor="red";
        //Go through the elements behind it.
        setTimeout(() => {
          for (let j = i - 1; j > -1; j--) {
            //value comparison using ascending order.
            if (arr[j + 1] < arr[j]) {
              //swap
              [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
              setTimeout(() => {
                setArray([...arr]);
                
              }, 500);
              arr2.style.backgroundColor="purple";
            }
          }
        }, i * 1000);
      }
      setSorting(false);
    }, 1000);

    console.log("insertion sort");
    // return arr;
  }
  
  const algorithm = (name) => {
        switch (name) {
          case "BubbleSort":
            return BubbleSort();
    
          case "InsertionSort":
            return InsertionSort();
          
          case "SelectionSort":
            return SelectionSort();
        }
      };

  return (
    <Box p={"4"}>
      <Flex gap={"4"} direction={["column", "row"]}>
        <SideBar
          generateArray={generateArray}
          sort={(e) => algorithm(e)}
          sorting={sorting}
          generating={generating}
          setInfo={(e)=>setInfo(e)}
          // algorithm={algorithm}
        />
        <Visualizer data={array} />
      </Flex>
      {
        (()=>{
          switch(info) {
            case "BubbleSort":
              return <BubbleSortInfo/>
              
            case "InsertionSort":
              return <InsertionSortInfo/>
              
            case "SelectionSort":
              return <SelectionSortInfo/>
          }
        })()
      }
      <Footer  />
    </Box>
  );
}

export default App;
