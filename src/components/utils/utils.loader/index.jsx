import React from 'react'
import PlaceholderImg from '../../../assets/img/Loading_icon.gif'

//styleds
import {
    LoadingHome
} from '../../../assets/style/global';


const  LoaddingGift = ({data}) => {
    const response = data
    return (
        <>
           {
            !response.length &&
            <LoadingHome> 
                 <img src={PlaceholderImg} style={{ width:'30px',height: '30px',margin:'auto' }} alt="Placeholder" />
             </LoadingHome> 
        }
        
        </>
        
     
    )
}

export default LoaddingGift