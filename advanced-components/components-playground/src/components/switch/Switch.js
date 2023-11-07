
import React from "react";

const CREDITCARD = 'CreditCard';
const BTC = 'Bitcoin';

class Switch extends React.Component {
    state = {
        paymentMethod: null
    };

    select = (choice) => {
        return (evt) => {
            this.setState({
                paymentMethod: choice
            });
        }
        
    }

    render() {
        return (
            <div className="switchContainer">
                <div className="switch">
                    <div className="choice" onClick={this.select(CREDITCARD)}>Credit Card</div>
                    <div className="choice" onClick={this.select(BTC)}>Bitcoin</div>                
                </div>
                <div className="selectedPaymentMethod">
                    Pay with {this.state.paymentMethod}
                </div>
            </div>
            
        );
    }
}

export default Switch;