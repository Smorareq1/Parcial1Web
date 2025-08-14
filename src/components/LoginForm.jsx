import { useState, useMemo } from 'react'
import '../styles/LoginForm.css'
import logo from '../assets/logoURL.png'

export default function LoginForm({ Login }) {
    const [clientCode, setClientCode] = useState('')
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const canSubmit = useMemo(() => {
        return (
            clientCode.trim() !== '' &&
            usuario.trim() !== '' &&
            password.trim() !== ''
        )
    }, [clientCode, usuario, password])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!canSubmit) return

        const data = {
            clientCode: clientCode.trim(),
            usuario: usuario.trim(),
            password: password.trim(),
        }

        // Mostrar alerta con los datos enviados
        alert(
            `Datos enviados:\n` +
            `Código de cliente: ${data.clientCode}\n` +
            `Usuario: ${data.usuario}\n` +
            `Password: ${data.password}`
        )

        if (typeof Login === 'function') {
            Login(data)
        }
    }

    return (
        <div className="login-container">
            <img src={logo} alt="Logo de la empresa" className="login-logo" />

            <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulario de inicio de sesión"
                className="login-form"
            >
                <div className="form-group">
                    <label htmlFor="clientCode">Código de cliente</label>
                    <input
                        id="clientCode"
                        name="clientCode"
                        type="text"
                        placeholder="Ej: C001"
                        autoComplete="off"
                        value={clientCode}
                        onChange={(e) => setClientCode(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="usuario">Usuario</label>
                    <input
                        id="usuario"
                        name="usuario"
                        type="text"
                        placeholder="Tu usuario"
                        autoComplete="username"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Tu contraseña"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" disabled={!canSubmit} className="btn-submit">
                    Iniciar sesión
                </button>
            </form>
        </div>
    )
}
