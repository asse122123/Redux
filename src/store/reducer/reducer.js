
export const fname=(state = "",action)=>{
    switch(action.type){
        case "FNAME":
            return action.payload
        default:
            return state
    }
}


export const lname=(state = "",action)=>{
    switch(action.type){
        case "LNAME":
            return action.payload
        default:
            return state
    }
}
export const age=(state = 0,action)=>{
    switch(action.type){
        case "AGE":
            return action.payload
        default:
            return state
    }
}
export const gender=(state = "",action)=>{
    switch(action.type){
        case "GENDER":
            return action.payload
        default:
            return state
    }
}
export const prof=(state = "",action)=>{
    switch(action.type){
        case "PROFESSION":
            return action.payload
        default:
            return state
    }
}

