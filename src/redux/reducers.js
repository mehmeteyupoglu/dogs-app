import {LOAD_FAVORITE, ADD_FAVORITE, DELETE_FAVORITE, FETCH_DATA} from "./types"

const initialState = {
    favorites: [],
    loadingFavorites: false, 
    disabled: ''
}

const dogReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE: 
            return ; 
        case DELETE_FAVORITE: 
            return ; 
        case LOAD_FAVORITE: 
            return ; 
        case FETCH_DATA: 
            return ; 
        default: 
            return state; 
    }
}

export default dogReducer