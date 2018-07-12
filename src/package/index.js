import Header from '@/components/header';
const components = {
  Header
};

const install = (Vue) => {
  const keys = Object.keys(components);
  keys.forEach(key => {
    Vue.component(`con${key}`, components[key]);
  });
};
export default Object.assign({}, { install });
