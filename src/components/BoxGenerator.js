import React, { useState } from 'react';

const listofBox = []

const BoxGenerator = () => {
    const [boxcolor, setColor] = useState("");
    const [boxwidth, setWidth] = useState("");
    const [boxheight, setHeight] = useState("");
    const [boxes, setBoxes ] = useState(listofBox); 

    const addBox = event => {
        event.preventDefault();
        let newBox ={boxcolor, boxwidth, boxheight};
        
        setBoxes([...boxes  ,newBox]);
    }
    return(
        <div>
            <form onSubmit={addBox}>
            <p>Enter Color<input type="text" name="boxcolor" onChange={ event =>setColor(event.target.value)}/></p>
            <p>Enter Width<input type="text" name="boxwidth" onChange={ event =>setWidth(event.target.value)}/></p>
            <p>Enter Height<input type="text" name="boxheight" onChange={ event =>setHeight(event.target.value)}/></p>
            <input type="submit" className="submitcolor" value="Add!"/>
            </form>

            {boxes.map((box,i)=>
                <div key = {i} style={{backgroundColor:box.boxcolor, width:box.boxwidth+"px", height:box.boxheight+"px", display:"inline-block"}}></div>
            )}
            
        </div>
    
    )

}


export default BoxGenerator