import {getByRole, render, screen} from '@testing-library/react'
import PhotoCard from './PhotoCard';


test('Render Image', () => {
   render(<PhotoCard imgUrl='https://placehold.jp/300x250.png' postUrl='https://placehold.jp/300x250.png' />)
   const imageElement = screen.getByRole("img");
   expect(imageElement).toBeInTheDocument();
});
