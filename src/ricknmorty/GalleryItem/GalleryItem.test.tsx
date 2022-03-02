import {render, screen} from '@testing-library/react';
import GalleryItem from "./GalleryItem";
import summerSmith from "../jsonForTests/SummerSmith.json";
import { MemoryRouter } from 'react-router-dom';

test('that GalleryItem component is rendered correctly', () => {
    render(<GalleryItem character={summerSmith}/>, {wrapper: MemoryRouter});

    expect(screen.getByTestId('gallery-item-name').textContent).toEqual('Summer Smith');

    const imageTag = screen.getByTestId('gallery-item-image') as HTMLImageElement;
    expect(imageTag.src).toEqual('https://rickandmortyapi.com/api/character/avatar/3.jpeg');

    expect(screen.getByTestId('gallery-item-status').textContent).toEqual('Alive');
    expect(screen.getByTestId('gallery-item-species').textContent).toEqual('Human');
    expect(screen.getByTestId('gallery-item-location-name').textContent).toEqual('Earth (Replacement Dimension)');
})