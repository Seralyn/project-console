import Button from '../components/Button';

export default {
    title: "Button",
    component: Button
}

export const Red = () => <Button label="Red Button" backgroundColor="red" />

Red.args = {a: 1};

export const Blue = () => <Button label="Blue Button" backgroundColor="blue" />

export const Orange = () => <Button label="Orange Button" backgroundColor="orange" />