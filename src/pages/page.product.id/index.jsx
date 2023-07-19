import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

//components
import LoaddingGift from '../../components/utils/utils.loader';

// api
import APi from '../../services/index';
import Info from '../../components/layout/layout.decribe.product.id';


function Productid  () {
    const  {id} = useParams()

    const [response, setResponse] = useState([])
    useEffect(() => {   
        HandleSeachAPI(id)
    }, [id])

    const HandleSeachAPI = async (id) => {
      
        if(id === false){
          alert('Campo vazio')
          return 
        }
        if(id === ""){
          alert('Campo vazio')
          return 
        }
        if(id === " "){
          alert('Campo vazio')
          return 
        }

        try{ 
        //require api
          
        const response = await APi.get(`/product/id/${id}`)

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

   
    return (
        <>
        <LoaddingGift data={response}/>
        <Info response={response}/>

        </>
    )
}   

export default Productid