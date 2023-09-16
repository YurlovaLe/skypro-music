export const Login = () => {
  const handleClick = () => {
    window.localStorage.setItem('user', '123456');
    window.location.href = '/';
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}