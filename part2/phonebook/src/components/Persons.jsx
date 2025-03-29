import React from 'react'

const Persons = ({personsToShow , handleDelete}) => {
  return (
    <ul>
    {personsToShow.map((person) => (
      <li key={person.name + person.id} style={{ listStyle: "none" }}>
        {person.name} - {person.phoneNumber} - 
        <button onClick={() => handleDelete(person.id,person.name)}>delete</button>
      </li>
    ))}
  </ul>
  )
}

export default Persons