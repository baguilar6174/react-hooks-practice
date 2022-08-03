import { useEffect, useState } from "react"
import Message from "./Message";

const initForm = {
  username: "Bryan",
  email: "bryan@gmail.com"
};

const SimpleForm = () => {

  const [form, setForm] = useState(initForm);

  const { username, email } = form;

  const onInputChange = ({target}) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    })
  }

  useEffect(() => {
    // console.log('Render component');
  }, []);

  useEffect(() => {
    // console.log('Form changed');
  }, [form]);
  

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <input className="form-control" type="text" placeholder="Username" name="username" value={username} onChange={onInputChange} />
      <input className="form-control my-2" type="email" placeholder="Email" name="email" value={email} onChange={onInputChange} />
      { username === "Bryan1" && <Message/> }
    </>
  )
}

export default SimpleForm