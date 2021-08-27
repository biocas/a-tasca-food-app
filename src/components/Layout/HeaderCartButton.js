import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';

const HeaderCartButton = props =>{
    const [bttnisHighlighted, setBttnisHighlighted] = useState(false); 
    const cartCtx = useContext(CartContext); 
    const {items} = cartCtx; 

    const numberOfCartItems = items.reduce((currNum, item) => {
        return currNum + item.amount; 
    }, 0);

    const buttonClasses = `${classes.button} ${bttnisHighlighted ? classes.bump : ''}`; //sets to string 
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBttnisHighlighted(true); 

        const timer = setTimeout(() =>{
            setBttnisHighlighted(false); 
        }, 300); 

        return () => {
            clearTimeout(timer); 
        };
 }, [items]); 


    return <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
};
export default HeaderCartButton; 