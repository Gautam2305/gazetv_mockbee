import React from "react";
export const FilterReducer = (state, action) => {
    switch(action.type){
        case "INFORMATIVE":
            return {...state, categories:{...state.categories, informative: !state.categories.informative
            }}

        case "MUSIC":
            return {...state, categories: {
                ...state.categories, music: !state.categories.music 
            }}
        
        case "COMEDY":
            return {...state, categories: {
                ...state.categories, comedy: !state.categories.comedy
            }}

        case "MOVIES":
            return {...state, categories: {
                ...state.categories, movies: !state.categories.movies
            }}

        default: 
        return state;
    }
}