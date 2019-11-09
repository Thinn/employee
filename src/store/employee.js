import { LOAD_EMPLOYEE_SUCCESS ,FILTERED_EMPLOYEE_SUCCESS,UPDATE_SEARCH_EMPLOYEE_NAME,UPDATE_SEARCH_EMPLOYEE_AGE} from "../actions";
const initialState = {
  ages: [{"key":0,"value":"15 to 20 Years Old"},
         {"key":1,"value":"20 to 30 Years Old"},
         {"key":2,"value":"30 to 40 Years Old"}],
  employees: [],
  filtered:[],
  searchEmployeeName: '',
  searchEmployeeAge: null
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EMPLOYEE_SUCCESS:
    case FILTERED_EMPLOYEE_SUCCESS:
    case UPDATE_SEARCH_EMPLOYEE_NAME:
    case UPDATE_SEARCH_EMPLOYEE_AGE:
      return { ...state, ...action.payload};
    default:
      return state;
  }
};