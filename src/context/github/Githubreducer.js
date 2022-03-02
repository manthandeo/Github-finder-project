const Githubreducer = (state,action) =>  {
switch(action.type)
{
    case 'GET_USERS':
        return{
            ...state,
            users: action.payload,
            loader:false,
        }
    case 'SET_LOADER':
        return {
            ...state,
            loader:true,
        }
    case 'CLEAR_USERS':
        return {
            ...state,
            users:[],
        }
     case 'GET_USER':
         return{
             ...state,
             user:action.payload,
             loader:false,
         } 
         case 'GET_REPOS':
         return{
             ...state,
             repos:action.payload,
             loader:false,
         }  
    default:
        return state
}
}
export default Githubreducer