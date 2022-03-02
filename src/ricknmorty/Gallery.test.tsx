import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Gallery from "./Gallery";
import adCharacters from "./jsonForTests/AdCharacters.json";
import {MemoryRouter} from "react-router-dom";

test('that R&M Gallery contains three searched items', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
       return Promise.resolve({
           status: 200,
           json: () => Promise.resolve(adCharacters)
       } as Response);
    });

    render(<Gallery />, {wrapper: MemoryRouter});

    const searchField = screen.getByTestId('search-field') as HTMLInputElement;
    fireEvent.change(searchField, {target: {value: 'Ad'}});

    await waitFor(() => {
        expect(screen.getAllByTestId('gallery-item').length).toBe(3);
    })
})