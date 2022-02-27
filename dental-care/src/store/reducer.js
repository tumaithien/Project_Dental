import initState from './initState'
import * as types from '../contants/actionTypes'

function reducer(state = initState , action){
    switch (action.type) {
        case types.LIST_ITEM_SERVICES:
            return {...state.listOurService}
        case types.LIST_ITEM_WORKPROCESS:
            return {...state.listWorkProcess}
        case types.LIST_ITEM_SATISFIELD:
            return {...state.listSatisfield}
        default:
            return state
    }
    
}
export default reducer