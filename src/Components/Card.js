import React, { useState } from 'react'

function Card({cartItem,props}) {
   
    let [siSelected,setSiSelceted] = useState(false);
    function handleAddCart(){
        props.setCart(prev=>prev+1);
        setSiSelceted(prev => !prev)
    }
    function handleRemoveCart(){
        props.setCart(prev=>prev-1);
        setSiSelceted(prev => !prev)
    }
    return (
        <div className="col mb-5" key={cartItem.id}>
            <div className="card h-100 text-center">
                {/* Sale badge */}
                <div className={(cartItem.saleBadge)?"badge bg-dark text-white position-absolute":"badge-none"} style={{top: 0.5+'rem', right: 0.5+'rem'}}>Sale</div>
                    {/* Product image */}
                    <img className="card-img-top" src={cartItem.cardImage} alt={cartItem.productName} />
                    {/* Product details */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* Product name */}
                            <h5 className="fw-bolder">{cartItem.productName}</h5>
                            {/* Product reviews */}
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                {(cartItem.starNumber>0)?(
                                            <>                                                                               
                                                {
                                                    [...Array(cartItem.starNumber).keys()].map(() =><div className="bi-star-fill"></div> ) 
                                                }                                            
                                            </>):""}                                     
                            </div>
                            {/* Product price */}
                            {(cartItem.originalPrice.length===2)?
                                    <>
                                        {`$${cartItem.originalPrice[0]}.00`}-{`$${cartItem.originalPrice[1]}.00`}</>:
                                    <>
                                    {(cartItem.saleBadge)?
                                        <><span className="text-muted text-decoration-line-through"> {`$${cartItem.originalPrice[0]}.00`} </span>
                                        {`$${cartItem.salePrice}.00`}</>:
                                        <>
                                        {`$${cartItem.originalPrice[0]}.00`}
                                        </>
                                        }</>}
                                    
                        </div>
                    </div>
                    {/* Product actions */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">{
                        siSelected?
                        <button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCart()}>Remove cart</button>:
                        <button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddCart()}>Add to cart</button>
                    }
                        
                    </div>                                    
                </div>
        </div>
    )
}

export default Card;
