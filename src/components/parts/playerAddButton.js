import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function IconButtons(props) {
  const { classes } = props;
  return (
    <div>
      <IconButton className={classes.button} aria-label="Add" color="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);