import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AddProduct from './AddProduct'

test('Entire `Add Product` Form is rendered', () => {
    render(<AddProduct />);
    const linkElement = screen.getByTestId("addForm");
    expect(linkElement).toBeInTheDocument();
  });

  test('Displaying right form details', () => {
    render(<AddProduct />);

    const productName = screen.getByTestId("nameHeading")
    expect(productName).toHaveTextContent("Product Name")

    const productDescription = screen.getByTestId("descHeading")
    expect(productDescription).toHaveTextContent("Description")

    const productURL = screen.getByTestId("urlHeading")
    expect(productURL).toHaveTextContent("Product Image URL")
  });


describe('Mocking useNavigate()', () => {
  test('Testing useNavigate() by mocking', () => {
    const mockedUsedNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockedUsedNavigate,
    }));
  });
});

  
 