//Example

const a = {
    start: { x: 5, y: 6},
    end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6