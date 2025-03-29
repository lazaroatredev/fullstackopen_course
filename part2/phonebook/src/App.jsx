import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect } from "react";
import { create, deletePerson, getAll, update } from "./services/services";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [show, setShow] = useState("");

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
    });
  };

  const postPerson = (personObject) => {
    create(personObject).then((data) => {
      setPersons(persons.concat(data));
    });
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

  // const isNameExist = (name) => {
  //   const existingPerson = persons.find((person) => person.name.toLowerCase() === name.toLowerCase())
  //   updatePersons(existingPerson.id ,{ newName , newNumber}).then(() => {
  //     setPersons(persons.map((person)=> person.id === existingPerson.id ? person : { newName , newNumber}))
  //   })
  //   return persons.some((person) => person.name.toLowerCase() === name.toLowerCase());
  // }

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
