import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store';

const store = setupStore();

test('Renders app component', async () => {
  await act(async () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(app).toMatchSnapshot();
  });
});
