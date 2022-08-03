import { useForm } from "../hooks/useForm";

const initialForm = {
  username: "",
  email: "",
  password: "",
};

const FormWithCustomHook = () => {

  const { form, onInputChange, onResetForm } = useForm(initialForm);
  const { username, email, password } = form;

  return (
    <>
      <h1>Form with Custom Hook</h1>
      <hr />
      <input className="form-control" type="text" placeholder="Username" name="username" value={username} onChange={onInputChange} />
      <input className="form-control my-2" type="email" placeholder="Email" name="email" value={email} onChange={onInputChange} />
      <input className="form-control my-2" type="password" placeholder="Password" name="password" value={password} onChange={onInputChange} />
      <button onClick={onResetForm} className="btn btn-warning my-2">Reset form</button>
    </>
  )
}

export default FormWithCustomHook;