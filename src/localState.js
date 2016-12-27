const loadState = () => {
    try {
        const serialized = localStorage.getItem('TodoApp');
        if(serialized) {
            return JSON.parse(serialized);
        }
        else {
            return undefined;
        }
    } catch(err) {
        console.warn(err);
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem('TodoApp', serialized);
    } catch(err) {
        console.warn(err);
    }
};

export {
    loadState,
    saveState
};
