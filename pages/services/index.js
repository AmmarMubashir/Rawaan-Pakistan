
import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Paper,
  TextField,
  Button,
  Typography,
  makeStyles,
} from '@mui/material';


import styles from './index.module.css';
import ServiceOneLayout from '@/components/layout/services/ServiceOneLayout';
import ServiceTwoLayout from '@/components/layout/services/ServiceTwoLayout';
import ServiceThreeLayout from '@/components/layout/services/ServiceThreeLayout';
import ServiceFourLayout from '@/components/layout/services/ServiceFourLayout';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import GradingIcon from '@mui/icons-material/Grading';
import GamepadIcon from '@mui/icons-material/Gamepad';

const steps = [
  { icon: <LocationOnIcon /> , caption: 'Step 1' },
  { icon: <ApartmentIcon /> , caption: 'Step 2' },
  { icon: <GamepadIcon /> , caption: 'Step 3' },
  { icon: <TimeToLeaveIcon /> , caption: 'Step 4' },
  { icon: <GradingIcon /> , caption: 'Step 5' },
];

function MultiStepForm() {
//   const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let activeContent;
  if(activeStep + 1 === 1){
    activeContent = <ServiceOneLayout />
  }else if(activeStep + 1 === 2){
    activeContent = <ServiceTwoLayout />
  }
  else if(activeStep + 1 === 3){
    activeContent = <ServiceThreeLayout />
  }
  else if(activeStep + 1 === 4){
    activeContent = <ServiceFourLayout />
  }
  return (
    <div className={styles.root}>
      <Paper elevation={3} className={styles.formContainer}>
        <Stepper activeStep={activeStep} alternativeLabel className={styles.stepper}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <span
                  className={`${styles.stepIcon} ${
                    activeStep === index ? styles.activeStepIcon : ''
                  }`}
                >
                  {step.icon}
                </span>
                <span>
                {step.caption}

                </span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* <Typography variant="h6" gutterBottom>
          {steps[activeStep].caption}
        </Typography> */}
        
        <div className={styles.stepperDetails}>
          {activeContent}

        </div>
        <div className={styles.buttonContainer}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="contained"
            color="primary"
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
          
        </div>
      </Paper>
    </div>
  );
}

export default MultiStepForm;



