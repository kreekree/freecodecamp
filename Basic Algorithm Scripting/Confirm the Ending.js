function confirmEnding(str, target) {
    // "Never give up and good lick will find you."
    // -- Falcor
    if (target === str.slice(str.length - target.length)) {
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding("Bastian", "n"));