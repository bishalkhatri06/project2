const initialData={
    stdName:'Nirajan'
}

const studentReducer=(state=initialData,action)=>{
    switch(action.type){
        case 'CHANGE_NAME':
            return{
                ...state,
                stdName:action.payload
            }
        default:
            return state
    }
    // return state
}

export default studentReducer