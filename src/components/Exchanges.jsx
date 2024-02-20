import { Button, HStack, Heading, Image, VStack , Text } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { server } from '../index.js';
import Loader from './Loader.jsx';

const Exchanges = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loader, setLoader] = useState(true)
    

    useEffect(() => {
        const fetchExchange = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setExchanges(data);
                setLoader(false)
                console.log(data)
            } catch (error) {
                console.log(error)
            }

        }
        fetchExchange()
    }, [])

    return (

        
            loader? <Loader/> : <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
                exchanges.map((i) => {
                    return(
                        <ExchangeCard url= {i.url}
                         img = {i.image}
                         name = {i.name}
                         rank = {i.rank}
                        />
                    )
                })
            }
        </HStack>
        
        
    )
}

const ExchangeCard = ({ url , img , name , rank}) => {
    return (
        <a href={url} target='blank'>
            <VStack
                w={"52"}
                shadow={"lg"}
                p={"8"}
                borderRadius={"lg"}
                transition={"all 0.3s"}
                m={"4"}
                css={{
                    "&:hover": {
                        transform: "scale(1.1)",
                    },
                }}
            >
                <Image 
                src={img}
                w={"10"}
                h={"10"}
                objectFit={"contain"}
                alt={"Exchange"}
                />

                <Heading size={"md"} noOfLines={1}>{rank}</Heading>
                <Text size={"md"} noOfLines={1}>{name}</Text>
            </VStack>
        </a>

    )
}

export default Exchanges