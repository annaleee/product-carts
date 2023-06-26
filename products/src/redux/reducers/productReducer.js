import { GET_ALL } from "../action";
export default function productReducer(state=[],action){
    switch(action.type){
        case GET_ALL:
            return action.payload;
        default:
            return state;
    }
}

export function fetchAll(){
    return async (dispatch) =>{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        dispatch(setProduct(data))
    }
}

export function setProduct(list){
    return {type:GET_ALL, payload:list}
}