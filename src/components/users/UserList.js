import classes from './UserList.module.css';

import Card from '../UI/Card';

const UserList = (props) => {
  return (
    <Card classNa={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} {user.age} Years Old.
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
