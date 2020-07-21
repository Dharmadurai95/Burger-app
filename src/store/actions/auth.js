import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = ()=> {
    return{
        type:actionTypes.AUTH_START
    }
}
export const authSuccess = (token,userId)=> {
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    }
}
export const authFail = (error)=> {
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}
export const auth = (email,password,isSignup)=> {
    return dispatch=>{
        dispatch(authStart());
        const authData = {
            email:email,
            password:password,
            returnSecueToken:true
        };
        let url = "https:identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbu4DqJctXUdgTkPSpvJvDx38P_3WiPEE";
        if(!isSignup){
          url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbu4DqJctXUdgTkPSpvJvDx38P_3WiPEE';
        }
    axios.post(url,authData)
    .then(response=> {
        console.log(response.data,'log')
        dispatch(authSuccess(response.data.idToken,response.data.localId))
    })
    .catch(error=> {
        dispatch(authFail(error))
    })

    }
}
