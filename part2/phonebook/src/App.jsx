import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const isNameExist = (name) =>  persons.some((person => person.name.toLowerCase() === name.toLowerCase()))

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submiting...", newName);
    const newPerson = {
      name: newName,
    };
    if(isNameExist(newName)){
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      return
    }
    setPersons(persons.concat(newPerson))
    setNewName("")
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map((person) =>(
        <li key={person.name} style={{listStyle: "none"}}>
          {person.name}
        </li>
      ))}</ul>
    </div>
  );
};

export default App;
