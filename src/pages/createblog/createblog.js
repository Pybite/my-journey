import { useState } from "react";
import "./createblog.css";
export default function Createblog() {
  const [inputs, setInputs] = useState({
    title: "",
    content: ""
  });

  const { title, content } = inputs;
const onChange = e => {
  setInputs({ ...inputs, [e.target.name]: e.target.value });
}

const onSubmit = async e => {
  e.preventDefault();
  const b = { title, content };
  const r = await fetch('http://localhost:3001/dashboard/create-blog', {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(b)
  });
  const d = r.json();
  console.log(d)
}
  return (
    <div className="body-container">
      <div className="container-body">
        <h1>Create New Blog</h1>
        <form action="/create-blog" method="POST">
          <div className="form-container">
            <input
              type="text"
              className="create-title"
              placeholder="Enter a title"
              name="title"
              value={title}
              onChange={e => onChange(e)}
            />
            <textarea
              className="textarea"
              name="content"
              rows="4"
              cols="50"
              placeholder="Enter text here ..."
              value={content}
              onChange={e => onChange(e)}
            ></textarea>
            <input type="submit" className="sub-btn" />
          </div>
        </form>
      </div>
    </div>
  );
}
