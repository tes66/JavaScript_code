const Item = countBasketPrice(["Кросовки", 1500, "Ботинки", 2000, "Тапки", 500, "Сапоги", 1200, "Кеды", 1100]);
console.log(Item);
function countBasketPrice(arr) {
    let sum = 0;
    if (arr.length) {
        sum = arr.reduce((a, b) => {
            return (parseFloat(a) || 0) + (parseFloat(b) || 0);
        });
    } else {
        sum = 0;
    }
    return sum;
}
