import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../reducers/actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class Attacking extends React.Component {
  state = {
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    count: this.props.count,
    ids: this.props.ids,
    country: this.props.country,
  };

  Swap = async (check, country, pos) => {
    if (check == true) {
      await this.props.changeState({
        PowerPoints : {
          ...this.props.PowerPoints, [country] : {
            ...this.props.PowerPoints[country], [this.props.label] : {
              ...this.props.PowerPoints[country][this.props.label], [pos] : false
            }
          }
        }
      });
    }
    else if (check == false) {
    await this.props.changeState({
      PowerPoints : {
        ...this.props.PowerPoints, [country] : {
          ...this.props.PowerPoints[country], [this.props.label] : {
            ...this.props.PowerPoints[country][this.props.label], [pos] : true
          }
        }
      }
    });
    }
    else {
      await this.props.changeState({
        PowerPoints : {
          ...this.props.PowerPoints, [country] : {
            ...this.props.PowerPoints[country], [this.props.label] : {
              ...this.props.PowerPoints[country][this.props.label], [pos] : true
            }
          }
        }
      });
      
      }
    console.log(this.props.PowerPoints[country]['attacking'])
    console.log('Material UI' + this.props.username)
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
      {this.props.country == 'germany' ? '' :
        <FormControlLabel onClick={() => this.Swap(this.state.checkedA, this.props.country, 'germany')}
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value={this.state.checkedA}
              color="primary"
              id={`${this.props.ids}germany`}
            />
          }
          label="Germany"
        />}
        {this.props.country == 'russia' ? '' :
        <FormControlLabel onClick={() => this.Swap(this.state.checkedB, this.props.country, 'russia')}
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value={this.state.checkedB}
              color="primary"
              id={`${this.props.ids}russia`}
            />
          }
          label="Russia"
        />}
        {this.props.country == 'britain' ? '' :
        <FormControlLabel onClick={() => this.Swap(this.state.checkedC, this.props.country, 'britain')}
          control={
            <Checkbox
              checked={this.state.checkedC}
              onChange={this.handleChange('checkedC')}
              value={this.state.checkedC}
              color="primary"
              id={`${this.props.ids}britain`}
            />
          }
          label="Britain"
        />}
        {this.props.country == 'france' ? '' :
        <FormControlLabel onClick={() => this.Swap(this.state.checkedD, this.props.country, 'france')}
          control={
            <Checkbox
              checked={this.state.checkedD}
              onChange={this.handleChange('checkedD')}
              value={this.state.checkedD}
              color="primary"
              id={`${this.props.ids}france`}
            />
          }
          label="France"
        />}
        {this.props.country == 'usa' ? '' :
        this.state.count >= 9 ?
        <FormControlLabel onClick={() => this.Swap(this.state.checkedE, this.props.country, 'usa')}
          control={
            <Checkbox
              checked={this.state.checkedE}
              onChange={this.handleChange('checkedE')}
              value={this.state.checkedE}
              color="primary"
              id={`${this.props.ids}usa`}
            />
          }
          label="United States"
        />: ''}
        {this.props.country == 'austria' ? '' :
        <FormControlLabel onClick={() => this.Swap(this.state.checkedF, this.props.country, 'austria')}
          control={
            <Checkbox
              checked={this.state.checkedF}
              onChange={this.handleChange('checkedF')}
              value={this.state.checkedF}
              color="primary"
              id={`${this.props.ids}austria`}
            />
          }
          label="Austria"
        />}
        {this.props.country == 'ottoman' ? '' :
        <FormControlLabel onClick={() => this.Swap(this.state.checkedG, this.props.country, 'ottoman')}
          control={
            <Checkbox
              checked={this.state.checkedG}
              onChange={this.handleChange('checkedG')}
              value={this.state.checkedG}
              color="primary"
              id={`${this.props.ids}ottoman`}
            />
          }
          label="Ottoman Empire"
        />}
        {this.props.country == 'italy' ? '' :
        <FormControlLabel onClick={() => this.Swap(this.state.checkedH, this.props.country, 'italy')}
          control={
            <Checkbox
              checked={this.state.checkedH}
              onChange={this.handleChange('checkedH')}
              value={this.state.checkedH}
              color="primary"
              id={`${this.props.ids}italy`}
            />
          }
          label="Italy"
        />}
        {this.props.country == 'serbia' ? '' :
        this.state.count >= 8 ? 
        <FormControlLabel onClick={() => this.Swap(this.state.checkedI, this.props.country, 'serbia')}
          control={
            <Checkbox
              checked={this.state.checkedI}
              onChange={this.handleChange('checkedI')}
              value={this.state.checkedI}
              color="primary"
              id={`${this.props.ids}serbia`}
            />
          }
          label="Serbia"
        />: ''}
      </FormGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

Attacking = connect(mapStateToProps, actions)(Attacking);

Attacking.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  ids: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default withStyles(styles)(Attacking);