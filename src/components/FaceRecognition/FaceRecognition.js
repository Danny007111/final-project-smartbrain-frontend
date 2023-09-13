import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({imageUrl, box}) => {
    if (imageUrl !== '') {
        // document.getElementById( 'inputImage' ).style.display = 'none';  
        return (
            <div className="center ma">
                <div className='absolute mt2'>
                    <img id="inputImage" src={imageUrl} alt="Pleace import proper format! (`Copy image address`)" width="500px" height="auto"/>
                    <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
                    </div>
                </div>
            </div>
        );      
    }
}

export default FaceRecognition;