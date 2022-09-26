export const API_URL = process.env.REACT_APP_GLOBAL_API_URL;
export const INFO_USR = API_URL + 'users/';
export const GET_USR_DETAIL = (id) => {
    return INFO_USR + id ;
}
export const UPT_USR = (id) => {
    return INFO_USR + id;
}
export const DEL_USR = (id) => {
    return INFO_USR + id;
}
