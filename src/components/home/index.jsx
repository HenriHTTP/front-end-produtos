import React, { useEffect } from 'react'
import { useState } from 'react';
import PlaceholderImg from './alt/Loading_icon.gif'

// api
import APi from '../../api/index';
import Container from '../container';
import { LoadingContainer, LoadingHome, Loadmore } from '../global';

import{AiOutlinePlusCircle} from 'react-icons/ai'


function Home  () {

    const [response, setResponse] = useState([])
    const [visibleItems, setVisibleItems] = useState(8); // Número de itens visíveis

    useEffect(() => {   
        HandleSeachAPI()
    }, [])


    
    const HandleSeachAPI = async () => {
      
        try{ 
        //require api
          
        const response = await APi.get(`/product/select/random`)

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
      };
    
      const renderedItems = response.slice(0, visibleItems);
      const hasMoreItems = visibleItems <= response.length;



   
    return (
        <>

        {
            !response.length &&
            <LoadingHome> 
                 <img src={PlaceholderImg} style={{ width:'30px',height: '30px',margin:'auto' }} alt="Placeholder" />
             </LoadingHome> 
        }

       

        <Container response={renderedItems}/>
         {hasMoreItems && 
         <LoadingContainer>
             <Loadmore onClick={handleShowMore}><AiOutlinePlusCircle/></Loadmore>
         </LoadingContainer>
        
         }
       
     

        </>
    )
}   

export default Home