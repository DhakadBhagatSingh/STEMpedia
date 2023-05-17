const transferText = (text)=>{
    return(dispatch)=>{
        dispatch({
            type:'transfer',
            payload:text
        })
    }

}

export default transferText;