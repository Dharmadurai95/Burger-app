import React from 'react';
import  './Burger.css';
import BurgerIncreadent from './BurgerIncretient/BurgerIncretient'


const Burger = (props)=>{
 let transformedIngredients = Object.keys(props.ingredients)
 .map((igkey)=> {
      return [...Array(props.ingredients[igkey])]
      .map((_,i)=> {
       return <BurgerIncreadent key={igkey+i} type={igkey} />
    });
  })
  .reduce((arr,el)=> {
    return arr.concat(el)
  },[]);
if(transformedIngredients.length === 0) {
    transformedIngredients = <p>please add some incredients</p>;
}

 
    return(
        <div className='burger'>
           <BurgerIncreadent type='breate-top'/>
            {transformedIngredients}
           <BurgerIncreadent type='breate-bottom'/>
        </div>
    );
};
export default Burger;