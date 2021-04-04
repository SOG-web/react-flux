import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
import SelectInput from "./common/SelectInput";

function CourseForm(props) {
  let list = [
    {
      id: 1,
      name: "Cory House",
    },
    {
      id: 2,
      name: "Scott Allen",
    },
  ];

  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        onChange={props.onFormChange}
        name="title"
        value={props.course.title}
        error={props.errors.title}
      />

      <SelectInput
        id="author"
        name="authorId"
        onChange={props.onFormChange}
        value={props.course.authorId || ""}
        list={list}
        error={props.errors.authorId}
      />

      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={props.onFormChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
  // errors: PropTypes.object.isRequired,
};

export default CourseForm;
