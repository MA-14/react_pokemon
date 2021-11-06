import React ,{ useState,useEffect,useRef } from 'react'
import Item from "./Item";
import {
  Center,
  Flex,
  HStack,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ChakraProvider,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react"

const Data = () => {

  //alert用の関数とステート
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()



  const [pokemon, setPokemon] = useState([]);
  // data には Object をいれるので初期値を {} に変更
  const [data, setData] = useState({});

  //検索したい数字のステート
  const [num, setNum] = useState("");
  //inputされた数字を取得してnumにセット
  const onChangeSelect = (e) => setNum(e.target.value);
  //検索ボタンを押してfetchでデータ取得
  const onClickSearch = async () => {
    if (num >151) {
      setIsOpen(true);
    }else{
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${num}/`
      ).then((res) => res.json());
      setData(response);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();
      const pokemonList = data.results;

      setPokemon(pokemonList);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ChakraProvider>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  入力エラー!
                </AlertDialogHeader>

                <AlertDialogBody>
                  151以下の数字を入力してください
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button colorScheme="red" onClick={onClose} ml={3}>
                    OK
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        <h1 className="title">ポケモン図鑑</h1>
        <p className="title-message">図鑑番号で検索！</p>
        <Center>
        <Flex>
        <HStack>
        <NumberInput
          size="md"
          maxW={24}
          max={151}
          keepWithinRange={false}
          clampValueOnBlur={false}>
          <NumberInputField 
            value={num} 
            onChange={onChangeSelect}/>
          <NumberInputStepper >
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button colorScheme="teal" shadow="lg" onClick={onClickSearch}>検索</Button>
        </HStack>
        </Flex>
        </Center>
      </ChakraProvider>
      {/* <div  className="viewBox">
      {pokemon.map((item, index) => (
        <View 
        key={index}
        pokemonItem={index}
        // handleClick={handleClick} 
        />
      ))}
      </div> */}
      <Item
        id={data.id}
        height={data.height}
        pokemonNmae={data.name}
        weight={data.weight}
        // data.spritesが初期値は空になるため、 && でdata.spritesが「存在するとき」は表示に変更
        front={data.sprites && data.sprites.front_default}
        back={data.sprites && data.sprites.back_default}
        shiny={data.sprites && data.sprites.front_shiny}
        shinyBack={data.sprites && data.sprites.back_shiny}
      />
      {/*  */}
    </div>
  )
}

export default Data
