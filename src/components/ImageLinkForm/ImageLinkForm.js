import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onButtonSubmit, onButtonClear}) => {
    return (
        <div>

           <p className="f3">
            {'This Magic will detect faces in pictures. Give it a try!'}
           </p>
           <div className="center">
            <div className="form center pa4 br3 shadow-5">
                <input 
                type="text" 
                className="f4 pa2 w-70 center" 
                placeholder="Enter URL or press detect button."
                onChange={onInputChange} />
                
                <button 
                className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" 
                onClick={onButtonSubmit}>Detect</button>

                <button 
                className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" 
                onClick={onButtonClear}>Clear</button>
            </div>
           </div>

        </div>
    );
}

export default ImageLinkForm;