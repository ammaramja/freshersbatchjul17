
   class Account
   {
       acc_id:number;
       acc_name:string;
       balance:number;
        constructor(acc_id:number,acc_name:string,balance:number)
        {
            this.acc_id = acc_id;
            this.acc_name = acc_name;
            this.balance = balance;
        }
        getTotal():number
       {
           return this.balance; 
       }

   }

   class Savings extends Account{
       int:number;
       constructor(acc_id:number,acc_name:string,balance:number,int:number)
       {
            
            super(acc_id,acc_name,balance);
            this.int = int;
       }
       getTotal():number
       {
           return super.getTotal() + this.int; 
       }

   }

    class Current extends Account{
        cash_credit:number;
       constructor(acc_id:number,acc_name:string,balance:number,cash_credit:number)
       {
            
            super(acc_id,acc_name,balance);
            this.cash_credit = cash_credit;
       }
       getTotal():number
       {
           return super.getTotal() + this.cash_credit; 
       }

   }

   let savings1:Savings = new Savings(1,"Ammar",10000,0);
   let savings2:Savings = new Savings(2,"ASK",100,0);
   let savings3:Savings = new Savings(3,"Azoo",1000,0);
   let savings4:Savings = new Savings(4,"basit",400,0);

   let current1:Current = new Current(10,"AmmarAmja",10000000,100);
   let current2:Current = new Current(12,"ASKAmja",100,4500);
   let current3:Current = new Current(13,"ArwaAmja",100000000,140);
   let current4:Current = new Current(14,"basit",1000,10000);
   let acc_array:Array<any> = [];

   acc_array.push(savings1);
   acc_array.push(savings2);
   acc_array.push(savings3);
   acc_array.push(savings4);
   acc_array.push(current1);
   acc_array.push(current2);
   acc_array.push(current3);
   acc_array.push(current4);

   function getTotalCashinBank():void
   {
       let bigTotal:number = 0;
        acc_array.forEach(f=>
        {
            bigTotal += f.getTotal();
        })
        console.log(bigTotal);
   }

   getTotalCashinBank();
