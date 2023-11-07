
import React from "react";

const CREDITCARD = 'CreditCard';
const BTC = 'Bitcoin';

class SwitchWithDataAttribute extends React.Component {
    state = {
        paymentMethod: null
    };

    selectPaymentMethodUsingDataAttribute = (e) => {
        
        this.setState({
            paymentMethod: e.target.dataset.paymentMethod
        });
    }

    render() {
        return (
            <div className="switchContainer">
                <div className="switch">
                    <div className="choice" data-payment-method={CREDITCARD} onClick={this.selectPaymentMethodUsingDataAttribute}>Credit Card</div>
                    <div className="choice" data-payment-method={BTC} onClick={this.selectPaymentMethodUsingDataAttribute}>Bitcoin</div>                
                </div>
                <div className="selectedPaymentMethod">
                    Pay with {this.state.paymentMethod}
                </div>
            </div>
            
        );
    }
}

export default SwitchWithDataAttribute;