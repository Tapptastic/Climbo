namespace Data {
    class LocalStorage{
        AddItem(key, value){
            localStorage.setItem(key, value);
            return {key: key, value: value};
        };

        RemoveItem(key){
            localStorage.removeItem(key);
        };
    };
};