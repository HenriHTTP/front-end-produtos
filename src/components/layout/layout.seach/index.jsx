import React from 'react'

import {AiOutlineSearch} from 'react-icons/ai'

import { 
    MenuContainerSeach,
    MenuSeach,
    MenuSeachButton
  } 
  from '../../../assets/style/global/index'


const Seach = ({handleseach,handleValue}) => {
    
    return (
        <MenuContainerSeach>
           
        <MenuSeach onChange={handleValue}/>
        <MenuSeachButton onClick={handleseach}> <AiOutlineSearch/> </MenuSeachButton>

        </MenuContainerSeach>
)}

export default Seach