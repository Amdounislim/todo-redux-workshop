import {ADD_TASK, DELETE_TASK, CHECK_TASK, EDIT_TASK} from '../constants/actionTypes'

const intialState=[];

const reducerTask=(state=intialState, action)=>{
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload]
        case DELETE_TASK:
            return state.filter(el=>el.id !==action.payload)
        case CHECK_TASK:
            return state.map(el=>el.id===action.payload?{...el, isComplete:!el.isComplete}:el)
        case EDIT_TASK:
            return state.map(el=>el.id===action.payload.id?{...el, text:action.payload.text}: el)
    
        default:
            return state;
    }

}

export default reducerTask;