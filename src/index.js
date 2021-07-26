import './styles/index.scss';
const obj = {
  a: 'apple scrips',
  b: 'buttercream',
  c: {
    cd: 'cheese danish',
  },
};

console.log(obj?.c?.cd, obj?.f?.fe);

if (module.hot) {
  module.hot.accept();
}
