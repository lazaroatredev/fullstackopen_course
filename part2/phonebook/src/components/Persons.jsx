import React from 'react'

const Persons = ({personsToShow}) => {
  return (
    <ul>
    {personsToShow.map((person) => (
      <li key={person.name} style={{ listStyle: "none" }}>
        {person.name} - {person.phoneNumber}
      </li>
    ))}
  </ul>
  )
}

export default Persons