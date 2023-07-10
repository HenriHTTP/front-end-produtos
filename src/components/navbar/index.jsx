import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

//comnponents

import Seach from '../seach';
import {AiFillHome} from 'react-icons/ai'


//styles

import { 
  Menu,
  MenuContainerSeach,
  Menulogo,
  Logo
} 
from '../global/index'


export default function Navbar() {
      const [seach, setSeach] = useState('')
      const navigate = useNavigate();
     
      const HandleSearchValue= (e) => {
        let Thisvalue = e.target.value
        setSeach(Thisvalue.toUpperCase())
        
      }

      const HandleSeach = () => {
      
        if (seach === false) {
          alert('Campo vazio');
          return;
        } else {
          navigate(`/name/${seach.toLowerCase()}`);
        }
      };

      
    const [menuclass,setmenuclass]= useState('relative')
    const [border,setborder]= useState('none')

    const handleScroll = () => { 
        window.scrollY >= 1 ? setmenuclass('fixed') :setmenuclass('relative')
        window.scrollY >= 1 ? setborder('1px solid gray') :setborder('none')
        }
   
    useEffect(() => {
    // Utilizando useEffect para adicionar o listener de scroll ao carregar o componente
    window.addEventListener('scroll', handleScroll);

    // Utilizando useEffect para remover o listener de scroll ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, [])

    const handletohome = () => {
      navigate(`/`);
    }

  return (
  <>
        <Menu isFixed={menuclass} isBorder={border}> 
          <Menulogo>
           <Logo onClick={handletohome}>  <AiFillHome/></Logo>
          </Menulogo>
          <MenuContainerSeach>
          <Seach handleseach={HandleSeach} handleValue={HandleSearchValue}/>
          </MenuContainerSeach>
       </Menu>    


  </>


    



  )
}   