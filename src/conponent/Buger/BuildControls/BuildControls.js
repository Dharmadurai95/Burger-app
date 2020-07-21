import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const BuildControls = props => {
  return (
    <div className="controls">
      <p>
        current price:<strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctr => (
        <BuildControl
          key={ctr.label}
          label={ctr.label}
          added={() => props.IngredientAdded(ctr.type)}
          removed={() => props.ingredientRemoved(ctr.type)}
          disabled={props.disabled[ctr.type]}
        />
      ))}
      <button className="OrderButton"
        disabled={!props.purchasable}
       onClick={props.ordered}
       >ORDER NOW</button>
    </div>
  );
};
export default BuildControls;
