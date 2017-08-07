export function classes_and_modules()
{
   class Account
   {
        constructor(acc_id,acc_name,balance)
        {
            this.acc_id = acc_id;
            this.acc_name = acc_name;
            this.balance = balance;
        }
        getTotal()
       {
           return this.balance; 
       }

   }

   class Savings extends Account{
       constructor(acc_id,acc_name,balance,int)
       {
            
            super(acc_id,acc_name,balance);
            this.int = int;
       }
       getTotal()
       {
           return super.getTotal() + this.int; 
       }

   }

    class Current extends Account{
       constructor(acc_id,acc_name,balance,cash_credit)
       {
            
            super(acc_id,acc_name,balance);
            this.cash_credit = cash_credit;
       }
       getTotal()
       {
           return super.getTotal() + this.cash_credit; 
       }

   }

   let savings1 = new Savings(1,"Ammar",10000,0);
   let savings2 = new Savings(2,"ASK",100,0);
   let savings3 = new Savings(3,"Azoo",1000,0);
   let savings4 = new Savings(4,"basit",400,0);

   let current1 = new Current(10,"AmmarAmja",10000000,100);
   let current2 = new Current(12,"ASKAmja",100,4500);
   let current3 = new Current(13,"ArwaAmja",100000000,140);
   let current4 = new Current(14,"basit",1000,10000);
   let acc_array = [];

   acc_array.push(savings1);
   acc_array.push(savings2);
   acc_array.push(savings3);
   acc_array.push(savings4);
   acc_array.push(current1);
   acc_array.push(current2);
   acc_array.push(current3);
   acc_array.push(current4);

   function getTotalCashinBank()
   {
       let bigTotal = 0;
        acc_array.forEach(f=>
        {
            bigTotal += f.getTotal();
        })
        console.log(bigTotal);
   }

   getTotalCashinBank();
 
}