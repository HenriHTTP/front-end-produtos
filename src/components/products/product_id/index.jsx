import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

//img
import PlaceholderImg from './alt/Loading_icon.gif'

// api
import APi from '../../../api/index';
import Info from '../infos/index';

//styleds
import {
  LoadingHome
  } from '../../global';


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

      {
            !response.length &&
            <LoadingHome> 
              <img src={PlaceholderImg} style={{ width:'30px',height: '30px',margin:'auto' }} alt="Placeholder" />
             </LoadingHome> 
        } 

        

        <Info response={response}/>

        </>
    )
}   

export default Productid