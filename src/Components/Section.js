import React from 'react';
import Card from './Card';
let cardDetails=[
    {   id:1,
        saleBadge : false,
        cardImage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName: "Fancy Product",
        starNumber: 0,
        originalPrice : [40.00,80.00],
        salePrice : null
    },
    {   
        id:2,
        saleBadge : true,
        cardImage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName: "Special Item",
        starNumber: 5,
        originalPrice : [20.00],
        salePrice : 18.00
    },
    {   
        id:3,
        saleBadge : true,
        cardImage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName: "Sale Item",
        starNumber: 0,
        originalPrice : [50.00],
        salePrice : 25.00
    },
    {   
        id:4,
        saleBadge : false,
        cardImage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName: "Popular Item",
        starNumber: 5,
        originalPrice : [40.00],
        salePrice : null
    },
    {   
        id:5,
        saleBadge : true,
        cardImage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName: "Sale Item",
        starNumber: 0,
        originalPrice : [50.00],
        salePrice : 25.00
    },
    {   
        id:6,
        saleBadge : false,
        cardImage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName: "Fancy Product",
        starNumber: 0,
        originalPrice : [120.00,280.00],
        salePrice : null
    },
    {   
        id:7,
        saleBadge : true,
        cardImage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName: "Special Item",
        starNumber: 5,
        originalPrice : [20.00],
        salePrice : 18.00
    },
    {   
        id:8,
        saleBadge : false,
        cardImage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName: "Popular Item",
        starNumber: 5,
        originalPrice : [40.00],
        salePrice : null
    },
    
]

function Section(props) {
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            cardDetails.map((cartItem)=>{
                            return(
                                <Card cartItem={cartItem} key={cartItem.id} props={props}/>      
                            )
                        })}

                    </div>
                </div>
            </section>
                
        </>
    )
}

export default Section
