import { useDispatch, useSelector } from "react-redux";
import { addCart,minusCart,removeCart, } from "../redux/reducers/cartReducer";
import {store} from "../redux/store"
import { useEffect } from "react";
import styles from '../styles.module.css';

export default function Carts(){
    const data = useSelector((state)=>{
        return state.cart;
    })
    const product = useSelector((state)=>{
        return state.product;
    })
    const dispatch = useDispatch();
    return(
        <div className={styles.Container}>
            <div className={styles.ProductSubContainer}>
                {data.map((i)=>{
                const ele = product.find((e)=>e.id===i.id)
                return(<div className={styles.ProEleContainer} style={{height:"40rem"}}  key={i.id}>
                    <div className={styles.ProEleTitle}>{ele.title}</div>
                <img className={styles.ProEleImg} alt="iimg" src={ele.image}></img>
                <div className={styles.ProElePrice}>${ele.price} </div>
                <div className={styles.ProElePrice}>quantity: {i.quantity}</div>
                <div className={styles.ProElePrice}>${ele.price*i.quantity} in total</div>
                <div className={styles.CartButtonContainer}>
                <button className={styles.CartButton} onClick={()=>{dispatch(addCart(ele.id))}}>+</button>
            <button className={styles.CartButton} onClick={()=>{dispatch(minusCart(ele.id))}}>-</button>
            <button  className={styles.CartButton}onClick={()=>{dispatch(removeCart(ele.id))}}>x</button>
            </div>
                </div>)
            })}
            </div>
            
            
        </div>
    )
}