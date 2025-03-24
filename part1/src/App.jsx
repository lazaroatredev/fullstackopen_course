const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = ({part , exercise}) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Content = (props) => {
  const { exercises1, exercises2, exercises3 } = props;
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";

  return (
    <>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
