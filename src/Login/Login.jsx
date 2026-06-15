import { Form } from 'react-router';

export default function Login() {
  return (
    <Form method="POST" action="/">
      <div>
        <label htmlFor="username">Username:</label>
        <input name="username" id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input name="password" id="password" type="password" />
      </div>
      <button>Login</button>
    </Form>
  );
}
