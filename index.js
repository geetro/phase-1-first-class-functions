function receivesAFunction(callback){
    callback();
};

function returnsANamedFunction(){
    return function namedFunction(){
        return "test";
    }
    
};

function returnsAnAnonymousFunction(){
    return function(){return "test"};
};