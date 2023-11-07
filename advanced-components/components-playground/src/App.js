
import React, { useState } from 'react';
import './App.css';
import SwitchWithDataAttribute from './components/switch/SwitchWithDataAttribute';
import Switch from './components/switch/Switch';
import SwitchGeneric from './components/switch/SwitchGeneric';

const CREDITCARD = 'CreditCard';
const BTC = 'Bitcoin';

const creditCardObj = {
  name: 'Credit Card',
  value: CREDITCARD
};

const btcObj = {
  name: 'Bitcoin',
  value: BTC
};


function App() {
  const [paymentMethods, setPaymentMethods] = useState([creditCardObj, btcObj]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const [testChoices, setTestChoices] = useState([{name: 'test1',value:'1'}, {name:'test2',value:2},{name:'test3',value:3}]);
  const [selectedTestChoice, setSelectedTestChoice] = useState(null);

  return (
    <div className="App">
      <SwitchWithDataAttribute></SwitchWithDataAttribute>
      <hr></hr>
      <Switch></Switch>
      <hr></hr>
      <SwitchGeneric choices={paymentMethods} selectedChoice={selectedPaymentMethod} onSelect={setSelectedPaymentMethod}></SwitchGeneric>
      <hr></hr>
      <SwitchGeneric choices={testChoices} selectedChoice={selectedTestChoice} onSelect={setSelectedTestChoice}></SwitchGeneric>
    </div>
  );
}

export default App;
