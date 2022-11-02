import React from 'react';
import './Team.css';

const Team_Input = ({input, id, handleChange}) => {

    const setValue=(value) => {
        handleChange(value);
    }

    return (
        <div className="Teams-inputs">
            <div className="Team-left-side">
                <div className="Team-characteristics">{input}</div>
            </div>

            <div className="Team-right-side">
                <div>
                    <input 
                        type="number" 
                        className="Team-char-input" 
                        id={id} 
                        placeholder='0'
                        onChange={(n) => setValue(n)}
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default Team_Input;