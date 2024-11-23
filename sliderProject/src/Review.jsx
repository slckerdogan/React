import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { products } from './data';

function Review() {

    const [index, setIndex] = useState(0);
    const { title, price, content } = products[index]

    const nextProduct = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            if (newIndex > products.length-1) {
                newIndex = 0;
            } else {
                newIndex;
            }
            return newIndex
        })
    }

    const prevProduct = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if (newIndex > -1) {
                newIndex;
            } else {
                newIndex=0;
            }
            return newIndex
        })
    }

    const randomProduct=()=>{
            let newIndex = Math.floor(Math.random()*(products.length));
            setIndex(newIndex)
            console.log(newIndex)
    }


    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{price} TL</p>
            </div>
            <p>{content}</p>
            <div className="button-container">
                <button className="prev-btn btn btn-warning btn-outline-danger">
                    <FaChevronCircleLeft onClick={prevProduct}/>
                </button>
                <button className="next-btn btn btn-warning btn-outline-danger">
                    <FaChevronCircleRight onClick={nextProduct} />
                </button><br></br><br></br>
            </div>
            <button className="random-btn btn btn-danger btn-lg btn-outline-light" onClick={randomProduct}>
                Random Product
            </button>
        </article>
    )
}

export default Review