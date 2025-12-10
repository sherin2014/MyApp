import '@testing-library/jest-dom';  // Import jest-dom for custom matchers
import { describe, it, expect } from 'vitest';  // Import expect from Vitest
import { render, screen } from '@testing-library/react';  // Import rendering utilities
import About from '../src/Components/About';  
import React from 'react';  

describe("About", () => {
//Test Case 1
  it("should render the About component", () => {
    render(<About />);  // Render the About component
    
    //Assertion: check if there is an h1 element 
    const aboutElement = screen.getByRole('heading', {level: 1})
    expect(aboutElement).toBeInTheDocument();
  });

//Test Case 2
    it("should have the text about", () => {
      render(<About />);
      const text = screen.queryByText(/about/i); 
      expect(text).toBeInTheDocument();
  });  

//Test Case 3
it("should have the image", () => {
  render(<About />);
  const image = screen.getByAltText('devimage')
  expect(image).toHaveClass('userImage');
});  

//Test Case 4
test('should render an <img> element', () => {
  render(<About />);
  const image = screen.getByRole('img'); // get by role 'img'
  expect(image).toBeInTheDocument();
});
//Test Case 5
it("should have a src attribute", () => {
  render(<About />);
  const image = screen.getByAltText('devimage');
  expect(image).toHaveAttribute('src');
});
//Test Case 6
it("should have the correct CSS class", () => {
  render(<About />);
  const image = screen.getByAltText('devimage');
  expect(image).toHaveClass('userImage');
});


});
