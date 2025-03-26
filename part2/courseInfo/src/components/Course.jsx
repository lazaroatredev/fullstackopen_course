import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  const { name, parts } = course;

  const reduceFunction = (acum, course) => acum + course.exercises;
  const totalCourses = parts.reduce(reduceFunction, 0);

  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <p>
        <b>total of {totalCourses} exercises</b>
      </p>
    </>
  );
};

export default Course;
