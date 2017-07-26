export function destruct()
{
    let arr = ["a","b","z","x"];

    let [,,a,] = arr;
    console.log(a);


    let organ = {
        name : "Amjawala Inc!",
        address : {
            state:"Maharashtra",
            city:"Pune",
            pin_code : 411048
        }
    };

    let {address:{pin_code}}=organ;
    console.log(pin_code);
}