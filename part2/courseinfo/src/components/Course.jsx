const Header = (props) => {
  return( <h2>{props.course}</h2> )
}

const Part = (props) => {
  return ( <p>{props.part} {props.exercises}</p> )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  return (
    <p><strong>
      total of exercises {
        props.parts.reduce((sum, part) => sum + part.exercises, 0)
      }
    </strong></p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course