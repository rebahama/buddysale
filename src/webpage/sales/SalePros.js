import React from 'react'

const SaleProps = (props) => {
 const{owner,sale,images}=props 
  
 return (
    <div>
 
        
          <div>
            <p> {owner}</p>
            
            {images.map((image, index) => (
              <img key={index} src={image.image} alt="user uploads" />
            ))}

          
          </div>
        
    




    </div>
  )
}

export default SaleProps