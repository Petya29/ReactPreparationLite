import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders app component', () => {
  const app = render(<App />);

  expect(app).toMatchSnapshot();
});
