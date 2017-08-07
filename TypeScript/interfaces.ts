interface printable{
    print:()=>void;
}

class circle implements printable
{
    circumference:number;
    constructor()
    {
        this.circumference = 100;
    }
print():void
{
    console.log("circumference : ",this.circumference);
}
}

class employee implements printable
{
    name:string;
    constructor()
    {
        this.name = 'ammar';
    }
print():void
{
    console.log("name : ",this.name);
}
}

let c:circle = new circle;
let e:employee=new employee;

function printAll(c:circle,e:employee):void
{
    c.print();
    e.print();
}

printAll(c,e);