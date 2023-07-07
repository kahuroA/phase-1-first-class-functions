function receivesAFunction(cb){
    return cb();
}


function returnsANamedFunction(){
    cb = function (){ return 6+2;};

    return cb;
}


function returnsAnAnonymousFunction(){
    return function (){return "The Mizz"};
}