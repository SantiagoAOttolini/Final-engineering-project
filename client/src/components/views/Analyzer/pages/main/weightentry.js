import React from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";

function WeightEntry(props) {
  const { classes, handleChange } = props;

  return (
    /*
     these allow you to create input fields
     */
    <div className={classes.root}>
      <div className="mr-4 ml-4">
        <div className={classes.inputField}>
          <TextField
            id="outlined-dense"
            label="Peso corporal"
            name="bodyWeight"
            type="tel"
            pattern="[0-9]*"
            value={props.bodyWeight}
            onChange={handleChange}
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </div>

        <div className={classes.inputField}>
          <TextField
            id="outlined-dense"
            label="Altura (cm)"
            name="height"
            type="tel"
            pattern="[0-9]*"
            value={props.height}
            onChange={handleChange}
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </div>

        <div className={classes.inputField}>
          <TextField
            id="outlined-dense"
            label="Edad"
            name="age"
            type="tel"
            pattern="[0-9]*"
            value={props.age}
            onChange={handleChange}
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
}

export default withStyles()(WeightEntry);
