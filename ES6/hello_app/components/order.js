export function order()
{
    let order_obj = {id:"1",
                    title:"GoT",
                    price:1000,
                    printOrder(){
                        console.log(this.id);
                        console.log(this.title);
                        console.log(this.price);
                        
                    },
                    getPrice(){
                        console.log(this.price);
                    }
    };

    
    order_obj.printOrder();
    order_obj.getPrice();

    let new_order_obj = {}
    Object.assign(new_order_obj,order_obj);
    

    console.log("order_obj",order_obj);

    console.log("new_order_obj",new_order_obj);
}