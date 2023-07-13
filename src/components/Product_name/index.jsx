import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import{AiOutlinePlusCircle} from 'react-icons/ai'
// components
import LoaddingGift from '../loader';

// api
import APi from '../../api/index';
import Container from '../container';

//styleds

import { 
  LoadingContainer, 
  Loadmore,
 } from '../global';


function Productname  () {
    const  {name} = useParams()
    const [visibleItems, setVisibleItems] = useState(8); // Número de itens visíveis
    

    const [response, setResponse] = useState([])
    useEffect(() => {   
        HandleSeachAPI(name)
    }, [name])

    const HandleSeachAPI = async (name) => {
      
        if(name === false){
          alert('Campo vazio')
          return 
        }
        if(name === ""){
          alert('Campo vazio')
          return 
        }
        if(name === " "){
          alert('Campo vazio')
          return 
        }

        try{ 
        //require api
          
        const response = await APi.get(`/product/name/${name}`)

          setResponse(response.data)
          
          console.log(response.data)

          if(response.data.length === 0){
            alert('Nenhum produto encontrado')
            return
          }

        }catch(err){
          console.log(err)
        }
      }

     const handleShowMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Adiciona mais 10 itens ao número de itens visíveis
      }
     
      const renderedItems = response.slice(0, visibleItems);
      const hasMoreItems = visibleItems <= response.length;

   
    return (
      <>

      <LoaddingGift data={response}/>
      

      <Container response={renderedItems}/>
       
       {hasMoreItems && 
       <LoadingContainer>
           <Loadmore onClick={handleShowMore}><AiOutlinePlusCircle/></Loadmore>
       </LoadingContainer>
      
       }
   

      </>
    )
}   

export default Productname