import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/index';

it('renders heading', async () => {
  render(<Home />);

  await waitFor(() => {
    const heading = screen.getByText('Hello, NCP Boilerplate!');
    expect(heading).toBeInTheDocument();
  });
});
