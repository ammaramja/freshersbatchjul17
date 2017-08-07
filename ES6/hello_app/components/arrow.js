export function arrow()
{
    let output_obj= {

        string_array : ["a","x","z"],
        o_array : [],
        length_arr()
        {
            this.string_array.forEach((f)=>{
                this.o_array.push({name:f,length:f.length});
            });
        },
        print_array()
        {
            console.log(this.o_array);
        }
    };

    output_obj.length_arr();
    output_obj.print_array();
    
}