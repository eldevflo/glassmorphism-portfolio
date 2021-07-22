import React from 'react'
import './Education.css'
import learning from '../../assets/learning.jpg'
import {Image} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Element } from 'react-scroll';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
  },
  Accordion:{
      backgroundColor: 'rgba(252, 252, 252, 0.63)',
      boxShadow: '0 8px 32px 0 rgba(15, 211, 211, 0.37)',
      backdropFilter: ' blur( 9.0px )',
      WebkitBackdropFilter: ' blur( 9.0px )',
      border: ' 1px solid rgba( 255, 255, 255, 0.18 )'
  },
  text:{
      margin: '10px',
      fontSize: '20px',
      fontweight: 'bold',
      fontFamily: 'Vollkorn , serif'
  },
  content: {
      fontSize: '18px',
      color: '#292364'
  }
  
}));

function Education() {
      const classes = useStyles();

    return (
        <Element name="education">
        <div className="education-wrapper">
                  <Image src={learning} className='learning-img' />

            <h1>my education</h1>
            <div className={classes.root}>
            <Accordion className={classes.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                   
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <Typography className={classes.text}>bachelor's degree</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={classes.content}>
                            social science Research At Alzahra University of Tehran
                    </Typography>
                    </AccordionDetails>
                    </Accordion>
            <Accordion className={classes.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">

                        <Typography className={classes.text}>master's degree</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={classes.content}>
                    social science Research At Shahid Beheshti University of Tehran

                    </Typography>
                    
                    
                    </AccordionDetails>
                    </Accordion>
                             
            </div>
        </div>
        </Element>
    )
}

export default Education
