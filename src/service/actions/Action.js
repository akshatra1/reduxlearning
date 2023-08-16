import {ADD_TO_CART, REMOVE_TO_CART} from '../constants'

export const addToCart=(data)=>{
    return {
        // define the type of data
        type:ADD_TO_CART,
        // export data of addto cart
        data:data
    }
}

export const removeToCart=(data)=>{
    return {
        // type should be different for every function
        // define the type 
        type:REMOVE_TO_CART,
        // export data of addto cart
        data:data
    }
}