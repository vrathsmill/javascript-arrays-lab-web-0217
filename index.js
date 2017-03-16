const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function prependKitten(name){
  return [name, ...kittens]
}

function appendKitten(name){
  return [...kittens, name]
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, - 1)
}
