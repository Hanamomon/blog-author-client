import { useForm } from 'react-hook-form';
import { useSubmit } from 'react-router';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = useSubmit();

  return (
    <main>
      {Object.keys(errors).length > 0 && (
        <ul>
          {errors?.username && <li>{errors.username.message}</li>}
          {errors?.password && <li>{errors.password.message}</li>}
        </ul>
      )}
      <form
        onSubmit={handleSubmit((data) => {
          submit(data, { action: '/', method: 'POST' });
        })}
      >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            {...register('username', {
              required: 'Please enter a username.',
              pattern: {
                value: /^[\w\d]+$/gm,
                message: 'Username should only contain letters and numbers.',
              },
              maxLength: {
                value: 30,
                message: 'Username cannot exceed 30 characters.',
              },
            })}
            id="username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            {...register('password', {
              required: 'Please enter a password.',
              minLength: {
                value: 8,
                message: 'Password should contain at least 8 characters.',
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-#!$@£%^&*()_+|~=`{}[\]:";'<>?,./\\ ]).{1,30}$/gm,
                message:
                  'Password should contain at least one lowercase character, one uppercase character, one digit and one symbol.',
              },
            })}
            id="password"
            type="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
