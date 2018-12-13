import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label:'Salad',type:'salad' },
    { label:'Bacon',type:'bacon' },
    { label:'Cheese',type:'cheese' },
    { label:'Meat',type:'meat' },
];


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>(
            <BuildControl 
                key={ctrl.label} 
                Label={ctrl.label}
                
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabledd={props.disabledd[ctrl.key]}
                />
                
        ))}

        <button className={classes.OrderButton} disabled={!props.purchaseable}>ORDER NOW</button>

    </div>
);

export default buildControls;