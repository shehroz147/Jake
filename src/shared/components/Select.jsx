import React, { PropTypes } from 'react';

const Select = props => (
  <div>
    <select
      className="c-select"
      onChange={(event) => {
        const state = event.target.value;
        props.changeState(state);
      }}
      value={props.state}
    >
      <option value="0">Alabama</option>
      <option value="1">Alaska</option>
      <option value="2">Arizona</option>
      <option value="3">Arkansas</option>
      <option value="4">California</option>
      <option value="5">Colorado</option>
      <option value="6">Connecticut</option>
      <option value="7">D.C</option>
      <option value="8">Delaware</option>
      <option value="9">Florida</option>
      <option value="10">Georgia</option>
      <option value="11">Hawaii</option>
      <option value="12">Idaho</option>
      <option value="13">Illinois</option>
      <option value="14">Indiana</option>
      <option value="15">Iowa</option>
      <option value="16">Kansas</option>
      <option value="17">Kentucky</option>
      <option value="18">Louisiana</option>
      <option value="19">Maine</option>
      <option value="20">Maryland</option>
      <option value="21">Massachusetts</option>
      <option value="22">Michigan</option>
      <option value="23">Minnesota</option>
      <option value="24">Mississippi</option>
      <option value="25">Missouri</option>
      <option value="26">Montana</option>
      <option value="27">Nebraska</option>
      <option value="28">Nevada</option>
      <option value="29">New Hampshire</option>
      <option value="30">New Jersey</option>
      <option value="31">New Mexico</option>
      <option value="32">New York</option>
      <option value="33">North Carolina</option>
      <option value="34">North Dakota</option>
      <option value="35">Ohio</option>
      <option value="36">Oklahoma</option>
      <option value="37">Oregon</option>
      <option value="38">Pennsylvania</option>
      <option value="39">Rhode Island</option>
      <option value="40">South Carolina</option>
      <option value="41">South Dakota</option>
      <option value="42">Tennessee</option>
      <option value="43">Texas</option>
      <option value="44">Utah</option>
      <option value="45">Vermont</option>
      <option value="46">Virginia</option>
      <option value="47">Washington</option>
      <option value="48">West Virginia</option>
      <option value="49">Wisconsin</option>
      <option value="50">Wyoming</option>
      <option value="51">National Average</option>
    </select>
  </div>
);

Select.propTypes = {
  changeState: PropTypes.func,
  state: PropTypes.string,
};

export default Select;
