import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' 
                           type='text' 
                           onChange={onInputChange}
                           placeholder="Put your link here..." />
                    <button
                        className='b ph3 pv2 input-reset ba b--black bg-yellow grow pointer f6 dib'
                        onClick={onButtonSubmit}>
                        Detect 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;