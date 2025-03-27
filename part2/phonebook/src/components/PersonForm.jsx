import React from "react";

const PersonForm = ({newName , handleSubmit , handleNameChange , newNumber , handleNumberChange}) => {
  return (
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
  );
};

export default PersonForm;
