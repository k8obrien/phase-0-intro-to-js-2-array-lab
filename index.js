const cats = ["Milo", "Otis","Garfield"];
function destructivelyAppendCat(name = "Ralph"){
    return cats.push(name);
}
function destructivelyPrependCat(name = "Bob"){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(name = "Broom"){
    const catsCopy = [...cats,name];
    return catsCopy;
}
function prependCat(name = "Arnold"){
    const catsCopy = [name, ...cats];
    return catsCopy;
}
function removeLastCat(){
    const catsCopy = cats.slice(0,2);
    return catsCopy;
}
function removeFirstCat(){
    const catsCopy = cats.slice(1);
    return catsCopy;
}
