export function generator_arm(){

    function* armstrong(number)
    {
        while(1){

             let original_num = number;
             number = number.toString().split('');
             let len = number.length;
             let total_sum = 0;
                        
                        number.forEach(function(i) {
                            
                            parseInt(i);
                            i = Math.pow(i,len);    
                            total_sum += i;
                        });

             if(total_sum ===  original_num)
             {
                  if(original_num > 1000)
                    {
                        return "Error!";
                    }
                    var flag = yield original_num;
                   
             }
             
                    if(flag === true)
                    {
                        number=original_num;
                        number=1;
                    }
                    else{
                        number=original_num;
                        number+=1;
                    }
             

        }
        
    }

    let number = 1;
    let arm_obj = armstrong(1);

    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
        console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next(true));
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());
    console.log(arm_obj.next());

    
}