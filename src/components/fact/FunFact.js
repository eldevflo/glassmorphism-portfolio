import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import zukerburg from '../../assets/zukerburg.jpg'
import './FunFact.css'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
function FunFact() {
      const classes = useStyles();

    return (
        <div className='fact'>
                <p className="title">fun fact!</p>

        <Avatar alt="Remy Sharp" src={zukerburg} className={classes.large} />
        <p>Facebook’s logo is blue because Zuckerberg has red-green color blindness!</p>
        </div>
    )
}

export default FunFact
