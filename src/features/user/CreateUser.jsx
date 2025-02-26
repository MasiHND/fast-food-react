import { useState } from "react";
import SubmitButton from "../../ui/SubmitButton";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit} className="cursor-default p-4">
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-10 w-auto"
      />

      {username !== "" && (
        <div>
          <SubmitButton>Start ordering</SubmitButton>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
