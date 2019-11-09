import React from "react";
import {FormControl,InputLabel,TextField} from "@material-ui/core"
import styles from "./searchBar.module.scss";

export class SearchBar extends React.Component {
    render() {
        const {labelName,onChange} = this.props;
        return (
            <div className={styles.container}>
                    <InputLabel className={styles.label}>
                    {labelName}
                    </InputLabel>
                    <TextField
                        margin="normal"
                        variant="outlined"
                        onChange={onChange}
                    />
            </div>
        )
    }
}

