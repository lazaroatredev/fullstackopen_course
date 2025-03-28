import axios from "axios";

const baseURL = `http://localhost:3001/persons`;

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(baseURL, newPerson);
  return request.then( response => response.data);
};

const deletePerson = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then( response => response.data)
}

const update = ( id , newPersonObject ) => {
    const request = axios.put(`${baseURL}/${id}` , newPersonObject)
    return request.then( response => response.data)
}

export { getAll, create , deletePerson , update};
