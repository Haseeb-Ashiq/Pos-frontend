import { CLIENT_PROFILE_UPDATE, GET_CLIENT, LOGIN, SIGNUP, STATUS_UPDATE } from "../Action.Types/constant.type"

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
export const fetchClients=()=>{
    return {
        type:GET_CLIENT,
        payload:''
        }
}
export const clientStatusupdate=(data,id)=>({
    type:STATUS_UPDATE,
    payload:{data,id}
})
export const clientProfileUpdate=(data,id)=>{
    return {
        type:CLIENT_PROFILE_UPDATE,
        payload:{data,id}
    }
}