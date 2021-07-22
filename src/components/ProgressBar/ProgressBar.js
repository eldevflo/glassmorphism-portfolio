import React from 'react'
import { CircularProgressbar , buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressBar.css'




function ProgressBar(props) {

    return (
        <div className="progress-bar">
            <CircularProgressbar 
            value={props.percentage} 
            text={`${props.percentage}%`}
              styles={buildStyles({
                      strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,


                  // Colors
                pathColor: `rgba( 0, 255, 153, ${props.percentage / 100})`,
                textColor: '#000',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}

             />
    </div>  
    )
}

export default ProgressBar
