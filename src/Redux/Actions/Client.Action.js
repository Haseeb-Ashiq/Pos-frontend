import { LOGIN, SIGNUP } from "../Action.Types/constant.type"

export const signup=(form)=>{
    return {
        type:SIGNUP,
        payload:form
    }
}
export const clientLogin=(form)=>{
return {
    type:LOGIN,
    payload:form
}
}