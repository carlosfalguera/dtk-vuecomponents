import * as components from './components';

const componentsList = components?.default || components;
const dtkVueComponents = {
    install(Vue) {
        Object.keys(componentsList).forEach(name => {
            Vue.component(name, componentsList[name]);
        })
    },
};

export default dtkVueComponents;