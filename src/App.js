import './App.css';
import Data from "./Components/Data";
import React from 'react'
import {
  ChakraProvider,
} from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
    <ChakraProvider>
      <Data />
    </ChakraProvider>
    </div>
  );
}

export default App;
