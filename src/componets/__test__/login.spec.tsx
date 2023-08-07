import { render, screen } from '@testing-library/react';
import { debug } from 'console';
import Login from '../../screen/Login';

describe("Test the App ", () => {
    test("render the App", () => {
        const login = render(<Login />);
        login.findAllByAltText('Login');
        login.findAllByLabelText('Email');
        debug(login);
    })
})
