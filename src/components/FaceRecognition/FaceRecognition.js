import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({imageUrl, boxes}) => {
    if (imageUrl !== '') {
        
        // document.getElementById( 'inputImage' ).style.display = 'none';  
        return (
            <div className="center ma">
                <div className='absolute mt2'>
                    <img id="inputImage" src={imageUrl} alt="Pleace import proper format! (`Copy i-mage address`)" width="500px" height="auto"/>

                    {boxes.map((box, index) => (
                        <div
                        // Have to use key to identify each div ...
                            key={index}
                            className="bounding-box"
                            style={{
                            top: box.topRow,
                            right: box.rightCol,
                            bottom: box.bottomRow,
                            left: box.leftCol,
                            }}
                        ></div>
                    ))}
                    {/* --------Only 1 face------- VVVVVVVV */}
                    {/* <div 
                        className="bounding-box" 
                        style={{ top: boxes.topRow, right: boxes.rightCol, bottom: boxes.bottomRow, left: boxes.leftCol }}>
                    </div> */}
                    
                </div>
            </div>
        );      
    }
}

export default FaceRecognition;