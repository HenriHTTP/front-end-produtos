import React from 'react'
import Results from '../layout.results';



import { 
    ResultSeach
  } 
  from '../../../assets/style/global'

function Container  ({response}) {

    return (
        <>
        
                {response.length > 0 &&
                    <ResultSeach>
                    {response.map((data) => {
                        return(
                          <>
                          <Results key={data.id} id={data.id}name={data.PRODUCT_NAME} value={data.PRODUCT_VALUE}/>
                          </>
                    )})}
                         
                  
                    </ResultSeach>}

        </>
    )
}

export default Container    