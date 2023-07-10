import React from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom'

import PlaceholderImg from './alt/Loading_icon.gif'

import {
    ProductResult,
    ResultTitle,
    ResultValue,
    LinkButton,
    ImgProductContainer,
    ImgProduc,
    ProductActions,
    ProductDescription,
    ProductDescriptionContainer,
} from '../../global/index'

import {BsFillCartPlusFill} from 'react-icons/bs'


const InfoCard = ({id,name,value,describe}) => {
        const Link_id = `/item/${id}`
        const [imageLoaded, setImageLoaded] = useState(false);

        const handleImageLoad = () => {
            setImageLoaded(true);
        };
    return (
        <>
        <ProductResult key={id}>

        

            <ImgProductContainer>
                    {imageLoaded === false && <img src={PlaceholderImg} style={{ width:'30px',height: '30px',margin:'auto' }} alt="Placeholder" />} {/* Exibe a imagem de placeholder enquanto a imagem principal não carrega */}
                    <ImgProduc
                        style={{ display: imageLoaded ? 'block' : 'none' }}
                        src={"https://dummyimage.com/450x450/fff/aaa"}
                        alt={name}
                        onLoad={handleImageLoad}
                    />
 
        </ImgProductContainer>

        <ProductActions>

             <ResultTitle>{name}</ResultTitle>
            <ResultValue>{value}</ResultValue>
           
            
             <LinkButton>
             <Link style={{  textDecoration: 'none', margin: 'auto', color: 'white', fontSize:'1.2em' }} to={Link_id}> <BsFillCartPlusFill/> </Link> </LinkButton>
            
        </ProductActions>  
            
        
           


        </ProductResult>

        <ProductDescriptionContainer>
                <ProductDescription>  {describe} </ProductDescription>
          </ProductDescriptionContainer>
             

        
        </>
    )
}
export default InfoCard