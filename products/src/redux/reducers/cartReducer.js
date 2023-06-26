import { useSelector } from "react-redux";
import { ADD_CART,MINUS_CART,REMOVE_CART, GET_ALL_CART } from "../action";

export default function cartReducer(state=[],action){
    function solveAdd(state,action){
        const data = state;
            console.log("data")
            console.log(data)
            const newData = [...data];
            const ele = newData.find((i)=>i.id===action.payload);
            if(ele!==undefined){
                ele.quantity ++;
            }else{
                newData.push({id:action.payload, quantity:1});
            }
            return newData;
    }

    function solveMinus(state, action){
        const data = state;
            console.log("data")
            console.log(data)
            const newData = data.map((i)=>{
                if(i.id===action.payload&&i.quantity>=1){
                    return {...i,quantity:i.quantity-1};
                }else{
                    return{...i};
                }
            });
            return newData;
    }

    function solveRemove(state,action){
        const data = [...state];
        const newData = data.filter((i)=>{
            return i.id!==action.payload
        })
        return newData;
    }
    switch(action.type){
        case ADD_CART:
            return solveAdd(state, action);
        case MINUS_CART:
            return solveMinus(state, action);
        case REMOVE_CART:
            return solveRemove(state, action);
        default:
            return state;
    }
}
export function addCart(id){
    return {type:ADD_CART,payload:id}
}
export function removeCart(id){
    return {type:REMOVE_CART,payload:id}
}
export function minusCart(id){
    return {type:MINUS_CART,payload:id}
}