import React from "react";
import {connect}  from "react-redux";
import {Button} from "@material-ui/core";
import styles from "./employees.module.scss";
import {SearchBar,SearchComboBox,Table} from "../components";
import {loadEmployee,searchEmployee,updateSearchEmployeeName,updateSearchEmployeeAge} from "../actions";


class EmployeeComponent extends React.Component {

    componentDidMount(){
       this.props.dispatch(loadEmployee());
    }
    search =(e)=>{
        this.props.dispatch(searchEmployee());
    }
    updateName=(e)=>{
        this.props.dispatch(updateSearchEmployeeName(e.target.value));
      
    }
    updateAge=(e)=>{
        this.props.dispatch(updateSearchEmployeeAge(e.target.value));
      
    }
    render() {
        const {filtered,ages,searchEmployeeAge} =this.props;
        return (
            <div className={styles.container}>
                 <div className={styles["header-bar"]}>
                    <SearchBar labelName={"Name"} onChange={this.updateName}/>
                    <SearchComboBox labelName={"Age"} dataList={ages} onChange={this.updateAge} idx={searchEmployeeAge} />
                    <Button variant="contained"  onClick={this.search}>
                            Search
                    </Button>
                 </div>
              
               <Table data={filtered}></Table>
            </div>
        )
    }
}

export const Employee = connect(state => ({
    filtered: state.employeeReducer.filtered,
    ages: state.employeeReducer.ages,
    searchEmployeeAge: state.employeeReducer.searchEmployeeAge
}))(EmployeeComponent);