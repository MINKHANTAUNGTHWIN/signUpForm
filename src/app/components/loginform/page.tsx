'use client';

const LoginForm = () => {
  return (
    <>
      <div>
        <h1>This is login Form</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="Email"
            id=""
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
          />
        </div>
        <div>
          <button>login</button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
