import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [show, setShow] = useState("");

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

  const handleSearch = (e) => {
    setShow(e.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(show.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter show={show} handleSearch={handleSearch}/>
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
     <Persons personsToShow={personsToShow}/>
    </div>
  );
};

export default App;
