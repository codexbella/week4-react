import {render, screen} from '@testing-library/react';
import GalleryItem from "./GalleryItem";
import summerSmith from "./SummerSmith.json";

test('that component is rendered correctly', () => {
    render(<GalleryItem character={summerSmith}/>);

    expect(screen.getByTestId('gallery-item-name').textContent).toEqual('Summer Smith');
    expect(screen.getByTestId('gallery-item-status').textContent).toEqual('Alive');
    expect(screen.getByTestId('gallery-item-species').textContent).toEqual('Human');
    expect(screen.getByTestId('gallery-item-location-name').textContent).toEqual('Earth (Replacement Dimension)');
})