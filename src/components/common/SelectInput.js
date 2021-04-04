import React from "react";
import PropTypes from "prop-types";

function SelectInput(props) {
  return (
    <div className="form-group">
      <label htmlFor="author">Author</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value || ""}
          className="form-control"
        >
          <option value="" />
          {props.list.map((list) => {
            return (
              <option value={list.id} key={list.id}>
                {list.name}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  error: "",
};

export default SelectInput;
