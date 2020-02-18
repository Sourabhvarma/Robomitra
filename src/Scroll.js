import React from 'react';
const Scroll =(props) => {
    return(
        <div  style ={{overflow: 'scroll', border: 'Spx lightest blue', height: '700px'}}>
        {props.children}
       ,/</div>
    );
};
export default Scroll;