import React from 'react';
import { Component } from 'react';
import {RadioGroup} from '@material-ui/core';
import { DetailRowComponent } from './detailRow';
import { HeaderRow } from './header';

export class Table extends Component {
state={selected: "16924"}
  handleChange = event => {
    this.setState({selected: event.target.value});
  };

  render() {
    const {data } = this.props;
    return (
      <div>
 
        <div >
          <HeaderRow/>
          <RadioGroup  name="manager" value={this.state.selected} onChange={this.handleChange}>
          {
            data && data.map((d, idx) =>
              (
                <DetailRowComponent 
                  key={`detail_${idx}`}
                  data={d}
                />
              )
            )
          }
          </RadioGroup>
        </div>
      </div>
    )
  }
}
