import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class AttackCountry extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
    country: this.props.label,
    count: this.props.count,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef),
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Atk Alliance</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: `${this.state.country}AttackCountry`,
            }}
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            <MenuItem value={'germany'}>Germany</MenuItem>
            <MenuItem value={'russia'}>Russia</MenuItem>
            <MenuItem value={'britain'}>Britain</MenuItem>
            <MenuItem value={'france'}>France</MenuItem>
            {this.state.count >= 9 ?
            <MenuItem value={'usa'}>United States</MenuItem>
            : ''}
            <MenuItem value={'austria'}>Austria</MenuItem>
            <MenuItem value={'ottoman'}>Ottoman Empire</MenuItem>
            <MenuItem value={'italy'}>Italy</MenuItem>
            {this.state.count >= 8 ?
            <MenuItem value={'serbia'}>Serbia</MenuItem>
            : ''}
          </Select>
        </FormControl>
      </form>
    );
  }
}

AttackCountry.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

export default withStyles(styles)(AttackCountry);