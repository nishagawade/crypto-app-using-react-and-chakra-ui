import { Button, Container, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { server } from '../index.js';
import axios  from 'axios';
import CoinCard from './CoinCard.jsx';
import Loader from './Loader.jsx';

function Coins() {
     const [coins, setCoins] = useState([]);
     const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const fetchCoins = async() =>{
          try{
            const {data } = await axios.get(`${server}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
            console.log(data)
            setCoins(data);
            setLoading(false)
          }catch(error){
             console.log(error);
            
          }
           
        }
        fetchCoins()
    }, [])
  return (
    <>

    {
      loading ? <Loader/> : 
      <Container maxW={"container.xl"}>
 
     <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
       {
        coins.map((coin)=>(
          <CoinCard key = {coin.id} 
          id={coin.id}
          name = {coin.name}
          image = {coin.image}
          price = {coin.current_price}
          />
        ))
       }
      
     </HStack>
     </Container>
    }
    
    </>
  )
}

export default Coins