import React from "react";
import {ListItem,List,Typography} from "@material-ui/core";
import styles from "./header.module.scss";
import classNames from 'classnames';
export const HeaderRow = () => {
  return (
    <div className={styles['root']}>
      <List >
        <ListItem >
          <Typography className={classNames(styles["heading-cell"], styles["padding-1rem"], styles.name)} > Name </Typography>
          <Typography className={classNames(styles["heading-cell"], styles["padding-1rem"], styles.age)} > Age </Typography>
          <Typography className={classNames(styles["heading-cell"], styles["padding-1rem"], styles["full-time"])}> Full Time </Typography>
          <Typography className={classNames(styles["heading-cell"], styles["padding-1rem"], styles.manager)} > Manager </Typography>
        </ListItem>
      </List>
    </div>
  )
}