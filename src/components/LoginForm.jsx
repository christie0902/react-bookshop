import React from "react";

const LoginForm = ({ user, setUser }) => {
  return (
    <div>
      {!user ? (
        <>
          {" "}
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <button
            onClick={() => {
              setUser({
                id: 1,
                name: "John",
                email: "john.doe@gmail.com",
              });
            }}
          >
            Login
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setUser(null);
            }}
          >
            Log out
          </button>
        </>
      )}
    </div>
  );
};

export default LoginForm;
