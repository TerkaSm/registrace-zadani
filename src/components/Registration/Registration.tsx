import { useState } from "react"

interface User {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export const Registration = (): JSX.Element => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address </label>
      <input
        type="email"
        id="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <br/>
      <label htmlFor="username">User Name </label>
      <input
        type="text"
        id="username"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <br/>
      <label htmlFor="password">Password </label>
      <input
        type="password"
        id="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <br/>
      <label htmlFor="passwordConfirm">Confirm Password </label>
      <input
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        value={user.passwordConfirm}
        onChange={handleChange}
      />
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};
