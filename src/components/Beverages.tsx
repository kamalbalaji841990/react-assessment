import React, { useState }  from 'react';
// import logo from './logo.svg';
import {
    Link
  } from "react-router-dom";
import menuData from '../menu-data.json';
import './css/beverages.css';

function Beverages(props: { match: { params: { itemid?: "" | undefined; }; }; }) {
  
    const { itemid = '' } = props.match.params;
    const [ menuState, setMenuState ] = useState({
        newMenuData: {}
    });
    const newMenuValues = Object.values(menuData);
    const newArr = newMenuValues.filter((item) => item.itemId === parseInt(itemid, 10));
   
    const gotoPriceUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = newArr[0].itemId.toString();
        for (const [key, value] of Object.entries(menuData)) {
            if (value.itemId.toString() === id) {
                value.price = parseInt(event.target.value, 10);
            }
          }
          setMenuState({newMenuData: menuData});
    }

    const gotoAvailableUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
          console.log('checked val', event.target.checked);
          const id = newArr[0].itemId.toString();
          for (const [key, value] of Object.entries(menuData)) {
              if (value.itemId.toString() === id) {
                  value.available = event.target.checked;
              }
            }
            setMenuState({ newMenuData: menuData });
        }   

    console.log('updated Menu Data..,', menuState);

  return (
      <div>
          <div style={{ width: '25%' }}>
              <Link to="/">
                <button>go back</button>
              </Link>
            
        </div>      
        <div className="beveragesComp">
            <div className="list">Name </div>
            <div className="list">{newArr[0].name}</div>
            <div className="list">Category </div>
            <div className="list">{newArr[0].category}</div>
            <div className="list">Tax </div>
            <div className="list">{newArr[0].tax}</div>
            <div className="list">Price($) </div>
            <div className="list" style={{ padding: '10px' }}>
                <input onChange={(event) => gotoPriceUpdate(event)} type="number" name="price" id="price" placeholder="enter the price" defaultValue={newArr[0].price} />
            </div>
            <div className="list">isAvailable? </div>
            <div className="list">
                <label className="checkLbl">
                    <input className="availCheck" onChange={(event) => gotoAvailableUpdate(event)} defaultChecked={newArr[0].available} type="checkbox" />
                    <span className="available">
                        {'YES'}
                    </span>
                </label>
                </div>
            </div>
        </div>
  );
}

export default Beverages;
