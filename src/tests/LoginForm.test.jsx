import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../components/LoginForm';

describe('Formulario TDD', () => {
    test('Botón deshabilitado al inicio', () => {
        render(<LoginForm />);
        const boton = screen.getByRole('button', { name: /iniciar sesión/i });
        expect(boton).toBeDisabled();
    });

    test('Botón habilitado con los 3 campos completos', async () => {
        render(<LoginForm />);

        const clientCode = screen.getByLabelText(/código de cliente/i);
        const usuario = screen.getByLabelText(/usuario/i);
        const password = screen.getByLabelText(/password/i);
        const boton = screen.getByRole('button', { name: /iniciar sesión/i });

        await userEvent.type(clientCode, 'C001');
        await userEvent.type(usuario, 'sebastian');
        await userEvent.type(password, '123456');

        expect(boton).toBeEnabled();
    });

    test('Botón deshabilitado si falta un campo', async () => {
        render(<LoginForm />);

        const clientCode = screen.getByLabelText(/código de cliente/i);
        const usuario = screen.getByLabelText(/usuario/i);
        const password = screen.getByLabelText(/password/i);
        const boton = screen.getByRole('button', { name: /iniciar sesión/i });

        await userEvent.type(clientCode, 'C001');
        await userEvent.type(usuario, 'sebastian');
        expect(boton).toBeDisabled();

        await userEvent.type(password, '123456');
        expect(boton).toBeEnabled();

        await userEvent.clear(usuario);
        expect(boton).toBeDisabled();
    });
});
