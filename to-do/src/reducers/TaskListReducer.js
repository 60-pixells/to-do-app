export const TaskListReducer =  (state, dataObj) => {
    if(dataObj.type == "ADD_TASK") {
        return [...state, dataObj.data];
    }
}