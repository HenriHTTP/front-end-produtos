import React from 'react'

import { Link } from 'react-router-dom'

import {
    Result,
    ResultTitle,
    ResultValue,
    LinkButton,
    ResultImg,

} from '../../../assets/style/global/index'

import {BsFillCartPlusFill} from 'react-icons/bs'


const Results = ({id,name,value}) => {
        const Link_id = `/item/${id}`
    return (
        <>
        <Result key={id}>
            <ResultTitle>{name}</ResultTitle>
            
            <ResultImg  src={"http://via.placeholder.com/150x150"} alt="img"/>
            
            <ResultValue>{value}</ResultValue>
           
        
            <LinkButton>
             <Link style={{  textDecoration: 'none', margin: 'auto', color: 'white', fontSize:'1.2em' }} to={Link_id}> <BsFillCartPlusFill/> </Link> </LinkButton>
        </Result>
        
        </>
    )
}
export default Results