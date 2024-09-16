alert("boshlanishida arrayning uzinligi 4")

let array = [ "olma", "gilos", "olcha", "nok"];
console.log(array);



let confirmResutls = confirm("arraydan bir malumotni olib tashavoqchimisiz")

if (confirmResutls) {
    array.pop()
    console.log(array);
}else{
        console.log(array);
}