import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from '../../screen/Counter';
import { debug } from 'console';

describe("Test the Counter", () => {
    test("render the Counter Componet", () => {
        const counter = render(<Counter message='The Count value is ' />)
        debug(counter);
    })
    test("render the increment button ", () => {
        const incrementButton = screen.findByText("Increment")
        expect(incrementButton);
    });
    test("serach for text", () => {
        const msgtext = screen.findByText("The Count value is")
        expect(msgtext)
    });
    test("Click the button", async () => {
        const incrementBtn = await screen.findByTestId("data-test-increment-btn");
        // fireEvent.click(incrementBtn);
        debug(incrementBtn)
    })
})
