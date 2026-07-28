import React, { useState, useEffect } from 'react';



const Cmd = () => {

  return (
    <div className='terminal'>
        <div className="title" style={{
            width: '50vw',
            height: '10px',
            background: 'black',
                padding: '10px',
    position: 'fixed',
    borderTopLeftRadius:'10px',
    borderTopRightRadius:'10px',
    top: '0%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxSizing: 'border-box' // Prevents padding from breaking 50vh/50vw size
        }}>
            <div className="dots" style={{
                display:'flex',
            }}>
                <div className="red" style={{width:'13px', height:'13px', borderRadius:'100%', background:'red', marginRight:'5px', marginTop:'-5px'}}></div>
                <div className="yellow" style={{width:'13px', height:'13px', borderRadius:'100%', background:'yellow',  marginRight:'5px', marginTop:'-5px'}}></div>
                <div className="green" style={{width:'13px', height:'13px', borderRadius:'100%', background:'green',  marginRight:'5px', marginTop:'-5px'}}></div>

            </div>
        </div>
    </div>
);
}
export default Cmd;