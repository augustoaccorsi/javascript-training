/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const computer = {
    type: "laptop",
    model: "Mac Book Pro",
    screen: {
        size: 16,
        display: "lcd"
    },
    memory: 256,
    keyboardLight: true,
    setKeyboardLight: function (light){
        this.keyboardLight = light;
    }
};

console.log("Computer object:", computer);
console.log(computer.type);