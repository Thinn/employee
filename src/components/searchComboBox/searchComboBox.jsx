import React from "react";
import {InputLabel,Select,Chip,MenuItem,ListItemText} from "@material-ui/core"
import styles from "./searchComboBox.module.scss";

export class SearchComboBox extends React.Component {
    render() {
        const {labelName,dataList,idx,onChange} = this.props;
        return (
            <div className={styles.container}>
              
                    <InputLabel className={styles.label}>
                    {labelName}
                    </InputLabel>
                  
                    <Select className={styles["MuiInput-root"]}
                            id="combo"
                            value={idx}
                            onChange={onChange}
  
                            >
                          {dataList.map((d,idx) => (
                            <MenuItem className={styles['menu-item']} key={`age-${idx}`} value={d.key}>
                                <ListItemText className={styles['menu-item-text']} primary={d.value} />
                            </MenuItem>
                        ))}
                    </Select>
                      

            </div>
        )
    }
}

