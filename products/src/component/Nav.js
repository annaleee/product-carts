import styles from '../styles.module.css';
export default function Nav(props){
    return(<div className={styles.NavigationBar}>
        <button className={styles.NavigationButton} onClick={props.product}>All Products</button>
        <button className={styles.NavigationButton} onClick={props.cart}>Your Cart</button>
    </div>)
}