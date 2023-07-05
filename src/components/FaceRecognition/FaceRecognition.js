import React from "react";

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className="center ma">
            <div>
                <img src={imageUrl} alt="Pleace import proper photo format JPG!" width="500px" height="auto"/>
            </div>
        </div>
    );
}

export default FaceRecognition;