import React from "react";
import {
  Box,Flex,Spacer,Image,Badge
} from "@chakra-ui/react"


// データを受け取りましょう
const item = ({ id, height, pokemonNmae, weight, front, back, shiny,shinyBack}) => {
  return (
    <div className="pokemonItem">
      
      <Flex>
        <Box backgroundColor="gray.200" ><img src={front} alt={pokemonNmae}/></Box>
        <Spacer/>
        <Box backgroundColor="gray.200"><img src={back} alt={pokemonNmae} /></Box>
        <Spacer/>
        <Box backgroundColor="gray.200"><img src={shiny} alt={pokemonNmae} /></Box>
        <Spacer/>
        <Box backgroundColor="gray.200"><img src={shinyBack} alt={pokemonNmae} /></Box>
      </Flex>
      <Box fontWeight="bold" color="teal" backgroundColor="gray.200" my={3} py={3}>名前: {pokemonNmae}</Box>
      <Box fontWeight="bold" color="teal" backgroundColor="gray.200" my={3} py={3}>身長: {height} </Box>
      <Box fontWeight="bold" color="teal" backgroundColor="gray.200" my={3} py={3}>体重: {weight}</Box>



    </div>
  );
};

export default item;