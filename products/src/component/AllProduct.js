import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../redux/reducers/productReducer";
import {store} from "../redux/store"
import { addCart } from "../redux/reducers/cartReducer";
import styles from "../styles.module.css"

export default function AllProduct(){
    const data = useSelector((state)=>{
        return state.product;
    })
    const dispatch = useDispatch();
    function search(){
        dispatch(fetchAll(data))
    }
    return(
        <div className={styles.Container}>
            <div className={styles.ProductTitle}>Browse your products</div>
            <button className={styles.ProductButton} onClick={search}>Search</button>
            <div className={styles.ProductSubContainer}>
            {data.map((i)=>{return (<div className={styles.ProEleContainer} key={i.id}>
                <div className={styles.ProEleTitle}>{i.title}</div>
                <img className={styles.ProEleImg} alt="iimg" src={i.image}></img>
                <div className={styles.ProEleSubContainer}>
                    <div className={styles.ProElePrice}>${i.price}</div>
                    <div className={styles.ProEleCategory}>{i.category}</div>
                </div>
                <div className={styles.ProEleDesc}>{i.description}</div>
                <button className={styles.ProEleButton} onClick={()=>{dispatch(addCart(i.id));alert("Your products has been added to carts!")}}>Add to your cart</button>
            </div>)})}
            </div>
        </div>
    )
}