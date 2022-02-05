class Computer {
    constructor(type, model, screen, memory, keyboardLight){
        this.type = type;
        this.model = model;
        this.screen = screen;
        this.memory = memory;
        this.keyboardLight = keyboardLight;
    }

    setKeyboardLight(light){
        this.keyboardLight = light;
    }
}

export default Computer;