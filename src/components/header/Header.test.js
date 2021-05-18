import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

it("Will not crash if no nav items are provided", () => {
    render(<BrowserRouter><Header/></BrowserRouter>)
})