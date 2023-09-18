import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <form>

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
                type="submit"
                className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" 
                onClick={onButtonSubmit}>Detect</button>
                
                <button 
                type="reset"
                className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Clear</button>
            </div>
           </div>

        </form>
    );
}

export default ImageLinkForm;