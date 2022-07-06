import { Fragment, useState } from 'react';
import AddUsers from '../components/users/AddUsers';
import UserList from '../components/users/UserList';

const AddItems = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  // console.log(userList);
  return (
    <Fragment>
      <h1>Add users here </h1>
      <AddUsers onAddUsers={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
};

export default AddItems;
