export const loadStateFromLocalDB = () => {
    try{
        const serializedState = localStorage.getItem('bug-workspace-app');
        if(serializedState === null){
            return undefined;
        }

        return JSON.parse(serializedState);
    }catch(e){
        return undefined;
    }
}


export const saveStateToLocalDB = (state) =>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('bug-workspace-app', serializedState);
    }catch{
        return state;
    }
}