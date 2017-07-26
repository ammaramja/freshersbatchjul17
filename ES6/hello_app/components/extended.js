export function extended()
{
    let addition={
        add(a=4,b=5){
            return a+b;
        },

        userFriends(username,...users){
            console.log(username,...users);
        },

        printCapitalNames(...friends)
        {
            friends.forEach((f)=>{
                console.log(f.toUpperCase());
            })
        }
    };

    console.log(addition.add(2));
    addition.userFriends("Ammar",["z","a","b"]);

    addition.printCapitalNames(...["ammar","basit","bd","bb","ask"]);
}