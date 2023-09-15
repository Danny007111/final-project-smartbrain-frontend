import React, { useEffect, useState, useRef } from "react";
// import React from "react";
import "./FaceRecognition.css"

// const FaceRecognition = ({imageUrl, box}) => {
//     if (imageUrl !== '') {
//         // document.getElementById( 'inputImage' ).style.display = 'none';  
//         return (
//             <div className="center ma">
//                 <div className='absolute mt2'>
//                     <img id="inputImage" src={imageUrl} alt="Pleace import proper format! (`Copy image address`)" width="500px" height="auto"/>
                    
//                     <div 
//                         className="bounding-box" 
//                         style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
//                     </div>
                    
//                 </div>
//             </div>
//         );      
//     }
// }

const FaceRecognition = ({ ImageUrl, box }) => {
    const ImgeRef = useRef();
    var ImgHeight = 0;
    var ImgWidth = 0;
    const [Top, setTop] = useState();
    const [Bottom, setBottom] = useState();
    const [Left, setLeft] = useState();
    const [Right, setRight] = useState();
    if (box) {
      ImgHeight = ImgeRef.current.clientHeight;
      ImgWidth = ImgeRef.current.clientWidth;
    }
    useEffect(() => {}, []);

    return (
        <div className="ImageCenter">
        {box && (
            <div className="AllBoxCont">
            {box.map((mapp, i) => {
                return (
                <div className="bounding-box-container">
                    <div
                    style={{ height: ImgHeight, width: ImgWidth }}
                    className="bounding-boxes"
                    >
                    <div className="bounding-box-set">
                        <div
                        style={{
                            inset:
                            box[i].region_info.bounding_box.top_row * 100 +
                            "%" +
                            " " +
                            (1 - box[i].region_info.bounding_box.right_col) *
                                100 +
                            "%" +
                            " " +
                            (1 - box[i].region_info.bounding_box.bottom_row) *
                                100 +
                            "%" +
                            " " +
                            box[i].region_info.bounding_box.left_col * 100 +
                            "%" +
                            " ",
                        }}
                        className="bounding-box"
                        ></div>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        )}
        {ImageUrl && (
            <div className="imga">
            <img ref={ImgeRef} id="inputImage" src={ImageUrl} />
            </div>
        )}
        </div>
    );
};
    

export default FaceRecognition;