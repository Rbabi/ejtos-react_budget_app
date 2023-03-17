import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
  const [ currency,setCurrency ] = useState('');
  const { dispatch, } = useContext(AppContext);
  
  const updateCurrency = (event) => {
    /*console.log(currency+"....A..."+event.target.value);
    */
    dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
        });
    setCurrency(event.target.value);
    return;
  }
  return (
    <div className='alert alert-secondary'>  
    <label style={{marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}} >Currency
    <span>
      <select style={{ marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}} 
      id='currency'onChange={(event) =>updateCurrency(event)}> Currency
      
          <option style={{color:'black'}} value="£">£ Pound</option>
          <option style={{color:'black'}} value="$">$ Dollar</option>
          <option style={{color:'black'}} value="€">€ Euro</option>
          <option style={{color:'black'}} value="₹">₹ Rupee</option>
      </select>
      </span>
      </label>
    </div>



  );
};

export default Currency;