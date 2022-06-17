import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from "../Action.Types/constant.type";

const initial={
    isRegistered:false,
    client:'',
    isLogedIn:false,
}

const ClientReducer=(state=initial,action)=>{
switch (action.type) {
    case SIGNUP_SUCCESS:
        return {
            ...state,
            isRegistered:true
        }
        case LOGIN_SUCCESS:
            console.log(action.payload)
            window.localStorage.setItem('clientCredentials',JSON.stringify(action.payload));
            return {
                ...state,
                client:action.payload,
                isLogedIn:true 
            }

    default:
        return state;
}
}
export default ClientReducer;