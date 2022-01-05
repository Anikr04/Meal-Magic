import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [ ...new Set(Menu.map((curElem) => {
    return curElem.category;
   })
  ),
  "All",
 ];

const Resturant = () => {
   // const myStyle = { color: "red" }
   //eslint-disable-next-line 
   const [menuData, setmenuData] = useState(Menu);
   const [menuList, setMenuList] = useState(uniqueList);

   const filterItem = (category) => {

       if(category==="All"){
           setmenuData(Menu);
           return;
       }

       const updatedList = Menu.filter( (curElem) => {
            return curElem.category === category;
       });
       setmenuData(updatedList);
   };

    return (
        <>
          <Navbar filterItem = {filterItem} menuList={menuList} />
          <MenuCard menuData = {menuData} />
        </>
    )
}

export default Resturant
