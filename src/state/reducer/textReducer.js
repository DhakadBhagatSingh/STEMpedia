const reducer = (state='Write in the above text box', action)=>{
    if(action.type === 'transfer'){
        return action.payload;
    }
    else{
        return state;
    }
}

export default reducer;