import { useState } from 'react';
import SubmitButton from '../../ui/SubmitButton';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='p-4'>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input w-auto mb-10'
      />

      {username !== '' && (
        <div>
          <SubmitButton>Start ordering</SubmitButton>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
