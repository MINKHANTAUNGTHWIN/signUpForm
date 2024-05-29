'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignUpForm = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  async function signUpAction() {
    const userData = JSON.stringify({
      name: userName,
      email: email,
      password: password,
    });

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userData,
    });
    if (response.status === 200) {
      router.push('/');
      router.refresh();
    } else {
      setErrorMsg(response.statusText);
    }
  }
  return (
    <>
      {errorMsg !== '' && <div style={{ color: 'red' }}>{errorMsg}</div>}
      <div>
        <h1>This is SignUp Form</h1>

        <div>
          <label htmlFor="userName">userName</label>
          <input
            type="text"
            name="userName"
            id={userName}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={signUpAction}>SignUp</button>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
