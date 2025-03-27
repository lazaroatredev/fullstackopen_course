import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: 1111111111 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const isNameExist = (name) =>
    persons.some((person) => person.name.toLowerCase() === name.toLowerCase());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submiting...", newName);
    const newPerson = {
      name: newName,
      phoneNumber: newNumber,
    };
    if (isNameExist(newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input value={newName} name="newName" onChange={handleNameChange} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            name="newNumber"
            onChange={handleNumberChange}
            type="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name} style={{ listStyle: "none" }}>
            {person.name} - {person.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
