import React from 'react';
import './style.css'

const Brick= (props) => {

console.log("my props----",props);
return (
<div className="brick-cont">
    {props.name}
</div>
);

};

export default Brick;