import styled from 'styled-components';


//navbar  styleds

export const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    height: 50px;  
    background-color: white;
    align-items: center;
    padding:10px; 
    border-bottom: ${props => (props.isBorder)};
    position: ${props => (props.isFixed)};
    width: 100%;
    margin: 0px;
`;

export const Menulogo = styled.div` 
    width: 50px;
    height: 50px;
    color: white;
    display: flex;
    margin:auto;
    justify-content: center;
    text-align: center;
`;
export const  Logo = styled.h1`
    margin: auto;
    font-size: 1.5em;
    color:  #1abf24;
    text-align: center;
`;

export const MenuContainerSeach = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    border: 1px solid gray;
    border-radius: 10px;
    height: 30px;
    background-color: white;
    margin: auto;
`;
export const MenuSeach = styled.input`
    width:520px;
    padding: 5px;
    text-align: left;
    border: none;
    background-color: white;
    outline: none;
    font-size: 1em;
    margin: auto;
    color:gray;
`;
export const MenuSeachButton = styled.button`
    width: 50px;
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: white;
    border: none;
    font-size: 1.2em;
    color: gray;
    cursor: pointer;
`;
// result seach


export const ResultSeach = styled.div`      
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    width: 1000px;
    margin: auto;
    padding: 20px;

`;
export const Result= styled.div`
    width: 200px;
    height: 300px;
    padding: 10px;
    margin:auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 20px;
    background-color: white;
    &:hover {
    -webkit-box-shadow: 14px 10px 5px 1px rgba(237,237,237,1);
    -moz-box-shadow: 14px 10px 5px 1px rgba(237,237,237,1);
    box-shadow: 14px 10px 5px 1px rgba(237,237,237,1);
    cursor: pointer;
  }

`;

export const ResultTitle= styled.h1`
    font-size: 1em;
    text-align: center;
    margin: auto;


`;
export const ResultValue= styled.p`
    font-size: 1em;
    text-align: center;
    color:gray;
    margin: auto;

`;
export const LinkButton= styled.button`
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    margin: auto;
    text-decoration: none;
    border: none;
    background-color: #1abf24;
    border: 5px;

`;
export const ResultImg= styled.img`
    width: 150px;
    height: 150px;
    margin: auto;
`;

//product  informations

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 1000px;
    margin: auto;
    padding: 20px;
    margin-top: 20px;
    background-color: whitesmoke;
`;


export const ProductResult= styled.div`
    width: 900px;
    height: 500px;
    padding: 10px;
    margin:auto;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
export const ImgProductContainer= styled.div`
    width: 450px; 
    display: flex;
    justify-content: center;
    margin: auto;
    height: 450px;
    border-radius: 20px;
`;
export const ImgProduc= styled.img`
    width: 450px; 
    display: flex;
    justify-content: center;
    margin: auto;
    height: 450px;
    background-color: whitesmoke;
    border-radius: 20px;
`;

export const ProductActions= styled.div`
    width: 400px; 
    display: flex;
    justify-content: center;
    margin: auto;
    height: 450px;
    background-color: white;
    flex-direction: column;
    border-radius: 20px;
`;

export const ProductTitle= styled.h1`
    font-size: 1.2em;
    text-align: center;
    margin: auto;
`;

export const ProductValue= styled.h2`
    font-size: 1.3em;
    text-align: center;
    margin: auto;
    color: gray;
`;

export const ProductDescription= styled.p`  
    font-size: 1em;
    text-align: justify;
    margin: auto;
    color: gray;
    width: 850px;
`;
export const ProductDescriptionContainer= styled.div`   
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 200px;
    width: 900px;
    background-color: white;
    border-radius: 20px;
`;

//  loading

export const LoadingContainer = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 20px;
`;
export const Loadmore = styled.button`
    width: 120px;
    padding: 5px;
    margin: auto;
    border: none;
    background-color: whitesmoke;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 2em;
    color:gray;
`;
 
export const LoadingHome = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: whitesmoke;
`;
