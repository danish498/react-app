import { useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from './AddUsers.module.css';

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target.value);
    // const enterr = event.target.value;
    // console.log(enterr);

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    // console.log(enteredName, enteredAge);

    props.onAddUsers(enteredName, enteredAge);
  };

  return (
    <Card classNa={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>User Name</label>
        <input id='username' type='text' ref={nameInputRef}></input>
        <label htmlFor='age'> Age (in Year)</label>
        <input id='age' type='number' ref={ageInputRef}></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
