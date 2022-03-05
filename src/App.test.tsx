import { act, render } from '@testing-library/react';
import App from './App';

test('Renders app component', async () => {
  await act(async () => {
    const app = render(<App />);
    
    expect(app).toMatchSnapshot();
  });
});
