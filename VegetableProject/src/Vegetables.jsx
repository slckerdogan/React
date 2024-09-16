import React from 'react'

function Vegetable({vegetable}) { //!propsu süslü parantezle almamızın sebebi props olarak aktarılan ögenin bir nesne yani JavaScript ifadesi olmasıdır. Dolayısıyla bu propsu kullanmak için süslü parantez şarttır...
    const { title, image, description } = vegetable;
    console.log(vegetable);
    return (
        <div>
            <img src={image} alt="vegetable" width={"50%"}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Vegetable