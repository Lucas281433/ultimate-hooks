import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Stack,
  TextField,
  Button,
  List,
  ListItem,
} from "@mui/material";

import BookRoundedIcon from "@mui/icons-material/BookRounded";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import BookmarkAddedRoundedIcon from "@mui/icons-material/BookmarkAddedRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

/**
 * Hook for managing a single form field's state and onChange event handler
 * 
 * @param {string} type - The type of the field, e.g. "text", "number", etc.
 * @returns An object with type, value and onChange properties
 * @example
 * const name = useField("text")
 * const number = useField("number")
 */

const useField = (type) => {
  const [value, setValue] = useState("");

  /**
   * Handles changes to the field's value by setting the state to the given value
   * @param {React.ChangeEvent<HTMLInputElement>} event - The event triggered when the field's value changes
   * @returns {void}
   */
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

/**
 * Hook for managing a RESTful resource
 * 
 * @param {string} baseUrl - The base url of the resource
 * @returns An array with the resources and a service object that has a create method
 * @example
 * const [notes, noteService] = useResource("/api/notes")
 * const [persons, personService] = useResource("/api/persons")
 */
const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setResources(response.data);
    });
  }, [baseUrl]);

  /**
   * Creates a new resource on the server and updates the state with the new resource
   * @param {Object} resource - The resource to be created
   * @returns {Promise<void>}
   * @example
   * personService.create({ name: "John Doe", number: "123-456-789" })
   */
  const create = (resource) => {
    axios.post(baseUrl, resource).then((response) => {
      setResources(resources.concat(response.data));
    });
  };

  const service = {
    create,
  };

  return [resources, service];
};

/**
 * The main App component
 * 
 * Handles creating notes and persons by using the useResource and useField custom hooks
 * 
 * @returns {JSX.Element}
 * @example
 * import React from 'react'
 * import ReactDOM from 'react-dom/client'
 * import App from './App'
 * 
 * const root = ReactDOM.createRoot(document.getElementById('root'))
 * root.render(<App />)
 */
const App = () => {
  const content = useField("text");
  const name = useField("text");
  const number = useField("text");

  const [notes, noteService] = useResource("/api/notes");
  const [persons, personService] = useResource("/api/persons");

  const handleNoteSubmit = (event) => {
    event.preventDefault();
    noteService.create({ content: content.value });
  };

  const handlePersonSubmit = (event) => {
    event.preventDefault();
    personService.create({ name: name.value, number: number.value });
  };

  return (
    <Container>
      <h1 className="title">Custom Hooks</h1>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={5}
        flexWrap="wrap"
      >
        <div className="notes-font container">
          <h2 className="title">
            <BookRoundedIcon fontSize="small" />
            Notes
          </h2>
          <form onSubmit={handleNoteSubmit}>
            <Stack direction="column" justifyContent="center" spacing={1}>
              <TextField size="small" label="Content" {...content} />

              <Button variant="contained" type="submit">
                <BookmarkAddRoundedIcon />
                create
              </Button>
            </Stack>
          </form>
          {notes.map((n) => (
            <List key={n.id}>
              <ListItem>
                <BookmarkAddedRoundedIcon />
                {n.content}
              </ListItem>
            </List>
          ))}
        </div>

        <div className="persons-font container">
          <h2 className="title">
            <PeopleAltRoundedIcon fontSize="small" />
            Persons
          </h2>
          <form onSubmit={handlePersonSubmit}>
            <Stack spacing={1}>
              <TextField size="small" label="Name" {...name} />
              <TextField size="small" label="Number" {...number} />
              <Button variant="contained" type="submit">
                <PersonAddAltRoundedIcon sx={{ marginRight: "5px" }} />
                create
              </Button>
            </Stack>
          </form>
          {persons.map((n) => (
            <List key={n.id}>
              <ListItem>
                <PersonRoundedIcon />
                {n.name} {n.number}
              </ListItem>
            </List>
          ))}
        </div>
      </Stack>
    </Container>
  );
};

export default App;
