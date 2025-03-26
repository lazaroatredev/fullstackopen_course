const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Content = ({ parts }) => {
  const [part1, part2, part3 , part4] = parts;

  return (
    <>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
      <Part part={part4.name} exercise={part4.exercises} />
    </>
  );
};

const Course = ({course}) => {

  const reduceFunction = (acum , course) => acum + course.exercises
  const totalCourses = course.parts.reduce(reduceFunction , 0)

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <p><b>total of {totalCourses} exercises</b></p>
      {/* <Total parts={course.parts} /> */}
    </>
  );
};

const Total = ({ parts }) => {
  const [part1, part2, part3] = parts;

  return (
    <>
      <p>
        Number of exercises{" "}
        {part1.exercises + part2.exercises + part3.exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
