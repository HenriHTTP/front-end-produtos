import React, { useEffect } from 'react'
import { useState } from 'react';
// api
import APi from '../../services/index';
import Container from "../../components/layout/layout.coitainer.results"
import { LoadingContainer, Loadmore } from '../../assets/style/global';
import{AiOutlinePlusCircle} from 'react-icons/ai'
import LoaddingGift from '../../components/utils/utils.loader';


function Home  () {

    const [response, setResponse] = useState([])
    const [visibleItems, setVisibleItems] = useState(8); // Número de itens visíveis

  
    useEffect(() => {     // use effect
        HandleSeachAPI()
    }, [])


    
    const HandleSeachAPI = async () => {
      
        try{ 
        const response = await APi.get(`/product/select/random`)      //require api
        
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


       <LoaddingGift data={response} />
        
       

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