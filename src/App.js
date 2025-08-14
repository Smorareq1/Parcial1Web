import LoginForm from "./components/LoginForm";

export default function App() {
  const Login = (payload) => {
    // Por ahora solo log (no hay backend todavía)
    console.log('Login llamado con:', payload)
  }

  return (
      <div style={{ maxWidth: 360, margin: '2rem auto', fontFamily: 'system-ui' }}>
        <LoginForm Login={Login} />
      </div>
  )
}
