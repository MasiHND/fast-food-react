import { useState } from "react";
import SubmitButton from "../../ui/SubmitButton";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
