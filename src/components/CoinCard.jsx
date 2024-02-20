import { VStack , Image, Text } from '@chakra-ui/react'
import React from 'react';
import Coins from './Coins';


export default function CoinCard({key, id, name, image, price }) {
  return (
  <>

    <VStack w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }} >
       <Image src={image}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}/>
        
        <Text noOfLines={1}>{name}</Text>
       
    </VStack>
  </>
  )
}
