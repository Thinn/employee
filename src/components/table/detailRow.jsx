import React from 'react';
import { Component } from 'react';
import styles from './detailRow.module.scss';
import {ListItem,Checkbox,Radio} from "@material-ui/core";
import classNames from 'classnames';
export class DetailRowComponent extends Component {
  //initialize to check 1st checkbox
  state={ [1]:  true}

  handleChangeCheckBox= name => event =>{
    this.setState({ ...this.state, [name]: event.target.checked });
  
  }
  render() {
    const { data} = this.props;
    return (
      <div className={styles['root']}>
        <ListItem  >
   
          <div className={classNames(styles["content-cell"], styles["padding-1rem"], styles.name)}>
           {data.employee_name}
          </div>
          <div className={classNames(styles["content-cell"], styles["padding-1rem"], styles.age)}>
          {data.employee_age}
          </div>
          <div className={classNames(styles["content-cell"], styles["padding-1rem"], styles["full-time"])}>
            <Checkbox 
             key={`detail_${data.id}`}
               checked={this.state[data.id]||false}
               onChange={this.handleChangeCheckBox(data.id)}
               value={data.id}
            />
          </div>
          <div className={classNames(styles["content-cell"], styles["padding-1rem"], styles.manager)}>
   
            <Radio value={data.id} />
          </div>
        
        </ListItem>
      </div >
    )
  }
}
