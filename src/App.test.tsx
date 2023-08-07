import { render } from '@testing-library/react';
import { App } from './App';
import { Counter } from './screen/Counter';
import Login from './screen/Login';

test('React with TypeSript ', () => {
  // render(<App />);
});

test("render counter componet in the doucument", () => {
  const component = render(< Counter message={`The Count Value is `} />)
  console.log(component)
});

test("render Login componet in the doucument", () => {
  const component = render(< Login />)
  console.log(component)
});

