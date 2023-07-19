import React from 'react'
import InfoCard from '../layout.card.product.id';



import { 
    ProductContainer,
  } 
  from '../../../assets/style/global'


function Info  ({response}) {

    return (
        <>
        
                {response.length > 0 &&
                    <ProductContainer>
                    {response.map((data) => {
                        return(
                          <>
                          <InfoCard key={data.id} id={data.id}name={data.PRODUCT_NAME} value={data.PRODUCT_VALUE} describe={data.PRODUCT_DESCRIBE}/>

                          
                          </>
                    )})}
                   
            
                  
                    </ProductContainer>}

                   
        </>
    )
}

export default Info    