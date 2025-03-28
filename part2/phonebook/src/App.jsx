import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect } from "react";
import { create, deletePerson, getAll, update } from "./services/services";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [show, setShow] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage , setErrorMessage] = useState("")

  const fetchEffect = () => {
    getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  };
  useEffect(fetchEffect, []);

  const updatePersons = (id, personObject) => {
    update(id, personObject).then((data) => {
      setPersons(
        persons.map((person) => (person.id === data.id ? data : person))
      );
      setMessage(`Updated ${personObject.name}`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }).catch((error)=>{
      console.log(error.message)
      setErrorMessage(`Information of ${personObject.name} has already removed from server`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    });
  };

  const postPerson = (personObject) => {
    create(personObject).then((data) => {
      setPersons(persons.concat(data));
    });
    setMessage(`Added ${personObject.name}`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`¿Eliminar a ${name}?`)) {
      deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.error("Error eliminando:", error);
          alert("No se pudo eliminar el registro");
        });
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingPerson = persons.find(
      (person) => person.name?.toLowerCase() === newName.toLowerCase()
    );
    const newPerson = {
      name: newName,
      phoneNumber: newNumber,
    };
    if (existingPerson) {
      if (window.confirm(`${newName} ya existe. ¿Reemplazar número?`)) {
        const newPerson = {
          ...existingPerson,
          phoneNumber: newNumber,
        };
        updatePersons(existingPerson.id, newPerson);
        setPersons(
          persons.map((person) =>
            person.id === existingPerson.id ? newPerson : person
          )
        );
      }
    } else {
      postPerson(newPerson);
    }
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
      <Notification message={message} />
      <Notification message={errorMessage} className="error"/>
      <Filter show={show} handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
