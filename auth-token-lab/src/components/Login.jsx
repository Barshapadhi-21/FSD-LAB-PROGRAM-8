const Login = ({ onLogin }) => {
  const handleLogin = () => {
    const fakeToken = "fake-jwt-token-123"; // simulated token
    sessionStorage.setItem("authToken", fakeToken);
    onLogin();
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;