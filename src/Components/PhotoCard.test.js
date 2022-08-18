import {render, screen} from '@testing-library/react'
import PhotoCard from './PhotoCard';

//test if there is only 1 img element
test('Only render one image for each card', () => {
   render(<PhotoCard imgUrl='https://placehold.jp/300x250.png' postUrl='https://placehold.jp/300x250.png' />)
   const imageElement = screen.getAllByRole("img");
   expect(imageElement.length).toEqual(1);
});
