import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState({ name: "", age: "", bio: "" });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      var response = await axios.get("/getUser");
      console.log(response.data);
      if (response.status === 200) setUser(response.data);
    } catch (e) {
      throw e;
    }
  };

  const setUserData = async () => {
    axios.post("/setUser", user);
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    if (isEditMode) {
      setUserData();
    }

    setIsEditMode(!isEditMode);
  };

  return (
    <div className="app">
      <div className="user-form">
        <div className="user-field">
          <label className="user-field__label">Name :</label>
          {isEditMode ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="user-field__input"
            />
          ) : (
            <h3 className="user-field__value">{user.name}</h3>
          )}
        </div>
        <div className="user-field">
          <label className="user-field__label">Age :</label>
          {isEditMode ? (
            <input
              type="text"
              name="age"
              value={user.age}
              onChange={handleChange}
              className="user-field__input"
            />
          ) : (
            <h3 className="user-field__value">{user.age}</h3>
          )}
        </div>
        <div className="user-field">
          <label className="user-field__label">Bio :</label>
          {isEditMode ? (
            <input
              type="text"
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="user-field__input"
            />
          ) : (
            <h3 className="user-field__value">{user.bio}</h3>
          )}
        </div>
        <button
          className="user-form__btn"
          style={
            isEditMode
              ? { backgroundColor: "green" }
              : { backgroundColor: "#000" }
          }
          onClick={handleClick}
        >
          {isEditMode ? "Done" : "Edit"}
        </button>
      </div>
    </div>
  );
}

export default App;
