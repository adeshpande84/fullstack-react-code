import React from "react";
import PropTypes from "prop-types";

const SwitchGeneric = ({choices, selectedChoice, onSelect}) => {
    
    const select = (choice) => {
        return (evt) => {
            let newChoice = {
                name: choice.name,
                value: choice.value
            };
            onSelect(newChoice);
        }
    }

    const renderChoices = (choices) => {        
        const result = choices.map((choice, index) => (<div className="choice" key={index} onClick={select(choice)}>{choice.name}</div>));
        return result;
    }

    return (
        <div className="switchContainer">
            <div className="switch">
                {
                    renderChoices(choices)
                }
                
            </div>
            <div className="selectedPaymentMethod">
                Selected: {selectedChoice ? selectedChoice.name : ''}
            </div>
        </div>
    );
}

SwitchGeneric.propTypes = {
    choices: PropTypes.array,
    selectedChoice: PropTypes.object,
    onSelect: PropTypes.func
};

export default SwitchGeneric;