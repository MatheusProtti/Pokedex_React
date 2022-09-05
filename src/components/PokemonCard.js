import React from "react";

function Card({name, id, image, type}) {   
    

    return(
        <div>
            <div className="containerCardPokemon">
                <img src={image} alt="imagePokemon"/>
                <div className="twoBlocks">
                    <div>
                        <h1>{name}</h1>
                    </div>
                    <div className="pokemonType">
                        {type} 
                        {/* erro ta nesse type não tem uma key */}
                    </div>
                </div>
                <div className="oneBlock">
                    <div>
                        <h3>#{id}</h3>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Card;