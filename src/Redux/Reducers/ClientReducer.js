import { LOGIN_SUCCESS, SIGNUP_SUCCESS,GET_CLIENT_SUCCESS, STATUS_UPDATE_SUCCESS, CLIENT_PROFILE_UPDATE_SUCCESS } from "../Action.Types/constant.type";

const initial={
    isRegistered:false,
    client:'',
    isLogedIn:false,
    clients:[],
    isClientUpdated:false
}

const ClientReducer=(state=initial,action)=>{
switch (action.type) {
    case SIGNUP_SUCCESS:
        return {
            ...state,
            isRegistered:true
        }
        case LOGIN_SUCCESS:
            window.localStorage.setItem('clientCredentials',JSON.stringify(action.payload));
            return {
                ...state,
                client:JSON.parse(window.localStorage.getItem('clientCredentials')),
                isLogedIn:true 
            }
            case GET_CLIENT_SUCCESS:
                return {
                    ...state,
                   clients:[...action.payload]
                }
                case STATUS_UPDATE_SUCCESS:
                    let newClientArray=[];
                    for (const c in state.clients) {
                        if(state.clients[c]._id===action.payload._id)
                        {
                            newClientArray.push(action.payload);
                        }
                        else{
                            newClientArray.push(state.clients[c]);
                        }
                    }
                    return {
                        ...state,
                        clients:newClientArray 
                    }
                    case CLIENT_PROFILE_UPDATE_SUCCESS:
                        console.log(action.payload)
                        return {
                            ...state,
                            isClientUpdated:true
                        }

    default:
        return state;
}
}
export default ClientReducer;