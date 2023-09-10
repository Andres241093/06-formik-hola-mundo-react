import './App.css';
import Card from './components/Card'
import Container from './components/Container'
import { useState } from 'react';
import UserForm from './components/UserForm'

function App() {
  const [users, setUsers] = useState([]);

  const submit = user => {
    setUsers([
      ...users,
      user
    ]);
  }

  return (
    <Container>
      <Card>
        <div style={{ padding: '20px' }}>
            <UserForm submit={submit} />
        </div>
      </Card>

      <Card>
        <ul>
          {users.map(user =>
            <li key={user.email}>
              {`${user.name} ${user.lastname}: ${user.email}`}
            </li>
            )}
            </ul>
      </Card>
    </Container>
  );
}

export default App;
