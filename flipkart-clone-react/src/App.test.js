import { render, screen } from '@testing-library/react';
import App from './App';

test('renders flipkart clone homepage sections', () => {
  render(<App />);

  expect(screen.getByAltText(/flipkart logo/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /top deals on home essentials/i })).toBeInTheDocument();
  expect(screen.getByText(/anivaran's flipkart clone project/i)).toBeInTheDocument();
});
