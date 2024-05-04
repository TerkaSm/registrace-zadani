import { useState } from "react"
import styles from './Registration.module.css';
import registrationImg from './img/registration.webp'

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
      alert("Passwords do not match");
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <img className={styles.img} src={registrationImg} alt="icon registration" />
      <label className={styles.label} htmlFor="email">Email Address </label>
      <input className={styles.input}
        type="email"
        id="email"
        name="email"
        value={user.email}
        onChange={handleEmailChange}
        required
        placeholder="Email Address"
      />
      <label className={styles.label} htmlFor="username">User Name </label>
      <input className={styles.input}
        type="text"
        id="username"
        name="username"
        value={user.username}
        onChange={handleChange}
        required
        placeholder="User Name"
      />
      <label className={styles.label} htmlFor="password">Password </label>
      <input className={styles.input}
        type="password"
        id="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        required
        placeholder="Password"
      />
      <label className={styles.label} htmlFor="passwordConfirm">Confirm Password </label>
      <input className={styles.input}
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        value={user.passwordConfirm}
        onChange={handleChange}
        required
        placeholder="Confirm Password"
      />
      <button className={styles.button} type="submit">Register</button>
    </form>
  );
};
