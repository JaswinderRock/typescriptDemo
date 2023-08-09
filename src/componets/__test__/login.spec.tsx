import { render, screen } from '@testing-library/react';
import { debug } from 'console';
import Login from '../../screen/Login';
import userEvent from '@testing-library/user-event';

describe("Test the Login ", () => {
    test("render the Login Component", () => {
        const login = render(<Login />);
        login.findAllByAltText('Login');
        debug(login);
    });
    test("Test the submit button ", () => {
        const submitButton = screen.findByText("Submit")
        expect(submitButton);
    });
    test("find the email label", () => {
        const email = screen.findByLabelText('Email');
    });
    test("find the email input  by placeholder ", () => {
        const emailInput = screen.findByPlaceholderText('Please enter  your email');
    });
    test("email input field should accpect email", async () => {
        render(<Login />)
        const emailInput = await screen.findByPlaceholderText('Please enter  your email');
        userEvent.type(emailInput, "jass@gmail.com");
        expect(emailInput.nodeValue).toMatch("jass@gmail.com");
    });
    test("Password input should have type password", async () => {
        render(<Login />)
        const password = await screen.findByPlaceholderText('Please enter your password');
        expect(password).toHaveAttribute("type", "password")
    });
})
