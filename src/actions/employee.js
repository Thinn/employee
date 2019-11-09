export const LOAD_EMPLOYEE_SUCCESS= "LOAD_EMPLOYEE_SUCCESS"
export const FILTERED_EMPLOYEE_SUCCESS="FILTERED_EMPLOYEE_SUCCESS"
export const UPDATE_SEARCH_EMPLOYEE_NAME="UPDATE_SEARCH_EMPLOYEE_NAME"
export const UPDATE_SEARCH_EMPLOYEE_AGE= "UPDATE_SEARCH_EMPLOYEE_AGE"

export const loadEmployee =()=> async (dispatch, getState) =>{
    
    return fetch(`http://dummy.restapiexample.com/api/v1/employees`)
    .then(response => response.json())
    .then(json => 
        {
            dispatch({type: LOAD_EMPLOYEE_SUCCESS , payload: {employees: json,filtered: json} })
    })
}

export const searchEmployee = () => async (dispatch, getState) => {

    const {employees,searchEmployeeName,searchEmployeeAge} = getState().employeeReducer;


    //filter by Employee Name
    const key= searchEmployeeName.toLowerCase();
    let filtered = employees.filter(e => e.employee_name.toLowerCase().includes(key))

    //filter by Employee Age
  
    switch(searchEmployeeAge){
        case 0:
                filtered=filtered.filter(e => parseInt(e.employee_age)>=15 && parseInt(e.employee_age)<20)
                break;
        case 1:
                filtered=filtered.filter(e => parseInt(e.employee_age)>=20 && parseInt(e.employee_age)<30)
                break;
        case 2:
                filtered=filtered.filter(e => parseInt(e.employee_age)>=30 && parseInt(e.employee_age)<40)
                break;
        default: 
    }
   
    dispatch({
        type: FILTERED_EMPLOYEE_SUCCESS,
        payload: {filtered: filtered},
    })
}


export const updateSearchEmployeeName= value => async (dispatch, getState) =>{
    dispatch({
        type: UPDATE_SEARCH_EMPLOYEE_NAME,
        payload: {searchEmployeeName: value},
    })
}

export const updateSearchEmployeeAge= value => async (dispatch, getState) =>{
    dispatch({
        type: UPDATE_SEARCH_EMPLOYEE_AGE,
        payload: {searchEmployeeAge: value},
    })
}
