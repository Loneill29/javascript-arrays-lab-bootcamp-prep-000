const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {return kittens.push("Ralph")}
function destructivelyPrependKitten(name) {return kittens.unshift("Bob")}
function destructivelyRemoveLastKitten() {return kittens.pop(3)}
function destructivelyRemoveFirstKitten() {return kittens.shift(0)}