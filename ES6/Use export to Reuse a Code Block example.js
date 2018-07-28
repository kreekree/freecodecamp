// const capitalizeString = (string) => {
//     return string.charAt(0).toUppercase() + string.slice(1);
// }

// export { capitalizeString } //How to export functions.
// export const fee = "bar"; //How to export variables.

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }


