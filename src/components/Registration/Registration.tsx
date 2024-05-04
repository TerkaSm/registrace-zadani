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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      email: value,
      username: value.split("@")[0], 
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(user)

    if (user.password !== user.passwordConfirm) {
      alert("Hesla se neshodují, zkuste to znovu");
      setUser((prevUser) => ({
        ...prevUser,
        password: "",
        passwordConfirm: "",
      }))
      return;
    }

    setUser({
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address </label>
      <input
        type="email"
        id="email"
        name="email"
        value={user.email}
        onChange={handleEmailChange}
        required
      />
      <br/>
      <label htmlFor="username">User Name </label>
      <input
        type="text"
        id="username"
        name="username"
        value={user.username}
        onChange={handleChange}
        required
      />
      <br/>
      <label htmlFor="password">Password </label>
      <input
        type="password"
        id="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        required
      />
      <br/>
      <label htmlFor="passwordConfirm">Confirm Password </label>
      <input
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        value={user.passwordConfirm}
        onChange={handleChange}
        required
      />
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};
