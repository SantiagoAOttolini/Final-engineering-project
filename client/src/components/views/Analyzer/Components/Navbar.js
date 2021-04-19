import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    display: "flex",
    position: "relative",
  },
  grow: {
    flexGrow: 1,
    align: "center",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component {
  state = {
    anchorEl: undefined,
    open: false,
  };

  handleToggle = () => {
    this.setState((state) => ({ open: !state.open }));
  };

  handleClose = (event) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.root}>
        <Toolbar>
          {}
          <Typography
            variant="h5"
            className={classes.grow}
            align="left"
            color="secondary"
          >
            BMR Calculator
          </Typography>
          {}
        </Toolbar>
      </AppBar>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
