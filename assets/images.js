// assets/images.js
import A from './alphabet/A.jpg';
import B from './alphabet/B.jpg';
// Import other images...
import number1 from './numbers/1.jpg';
import number2 from './numbers/2.jpg';
// Import other numbers...
import defaultImage from './default.jpg';

const images = {
    A,
    B,
    // Add other letters
    1: number1,
    2: number2,
    // Add other numbers
    default: defaultImage
};

export default images;
