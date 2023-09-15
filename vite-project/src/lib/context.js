class Context {
    constructor(value=null) {
        this.value = value;
    };
    
    // Provider
    Provider = (value,children) => {
        this.value = value;
        return children;
        
    }

    // Consumer
    Consumer = children => children(this.value);
}

export default function createContext() {
    const context = new Context();
    return {
        Provider: context.Provider,
        Consumer: context.Consumer,
    };
}