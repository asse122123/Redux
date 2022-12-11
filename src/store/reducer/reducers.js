import { combineReducers } from "redux";
import { age, gender, lname, fname, prof } from "./reducer";

export const reducers = combineReducers({
    firstName: fname,
    lastName: lname,
    Age: age,
    Gender: gender,
    Profession: prof
})

