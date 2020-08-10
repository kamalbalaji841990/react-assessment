import React from 'react';
import {
    Link
  } from "react-router-dom";
import menuData from '../menu-data.json';
import checkUrlString from '../common/urlOptimize';
import './css/home.css';

console.log('Menu Data');
const newMenuValues = Object.values(menuData);
console.log('Menu Data', newMenuValues);
function Home() {
  return (
    <div className="homeComp">
      {newMenuValues && newMenuValues.length > 0 && newMenuValues.map((node) => (
        <Link className='listItem' key={node.itemId} to={`/${checkUrlString(node.category)}/${checkUrlString(node.name)}/itemId-${node.itemId.toString()}`}>
          <div className="nameDisp">{node.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
