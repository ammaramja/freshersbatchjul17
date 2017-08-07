use ammar
db.EMP.find().sort({ename:1})

db.EMP.find({},{ename:1}).sort({hiredate:1})

db.EMP.find({},{ename:1,job:1,sal:1,hiredate:1}).sort({job:1,sal:-1})

db.EMP.aggregate(

    { 
        $project:{
            ename:1,
            month:{$month:"$hiredate"}
            }
    },

    {$match:{month:02}}
)
    
db.EMP.aggregate(

    { 
        $project:{
            ename:1,
            day:{$dayOfMonth:"$hiredate"}
            }
    },

    {
        $match:
        {
          $or:[
              {  day:28},{day:29},{day:30}]
        }
        
    }
    
db.EMP.aggregate(
    
    {
        $project:{
            ename:1,
            job:1,
            "year":{$year:"$hiredate"}
            }
    },
    {        
            $match:{
            
                $and:[
                {year:2001},
                {job:"Manager"}
                ]
                
                }
            
            
    }
)

db.EMP.aggregate(
    {
        $project:{
                c : {$concat:["$ename"," , ","$job"]}
            
                    }
    }
    )
    
db.EMP.aggregate(
    
    {
        $project:{
            ename:1, 
            f : {$toUpper:{$substr:["$ename",0,1]}}, 
            ll : {$substr:["$ename",1,-1]}
            
            }
            
            
        },
        {
            $project:{
                ename:1,
            c : {$concat:["$f","","$ll"]}}
        }
        
    )
        
        
        
db.EMP.aggregate(
        {
            $project:
            {
                ename:1,
                length : {$strLenCP:"$ename"}    
            }
        }
        )
        
db.EMP.aggregate(
        {
            $project:
            {
                ename:1,
                check : {$substr:["$ename",0,1]}
            }
        },
        {
            $match:{check:"A"}
        },
        {
            $project:
            {
                ename:1,
                NotA : {$substr:["$ename",1,-1]}
            }
        }
        )
        
db.EMP.aggregate(
        {
            $project:
            {
                ename:1,
                r_location: {$strLenCP:"$ename"}
            }
        },
        {
            $project:
            {
                NotA : {$substr:["$ename",1,-1]}
                r_check : {$susbstr:["$ename","$r_location",-1]}
            }
        }),
        {
            $match:
            {
            }
        }
        
        )
        
        
db.EMP.find().forEach( function(x){
    
    var l = x.ename[x.ename.length-1]
    if(l == 'r')
    {
        ll = x.ename.split(/r$/i)
        print (ll[0])
    }
    
    })
    
db.EMP.find().forEach(function (x){

    var l = x.ename.split(x.ename[3])
    print (l)
    })
    
db.EMP.find().forEach(function (x){

    
    var l = x.ename.split(x.ename[3])
    print (l[0])
    })
    
db.EMP.find().forEach(function (x){
    
    var l = x.ename
    l = l.replace(/a/i,"e")
    print (l)

})

db.EMP.find().forEach(function (x) {
    
    print (x.ename)
    print (x.ename.indexOf("ar"))
    
})

db.EMP.find().forEach(function (x) {
  
    print (Math.round((x.sal)/1000)*1000)
    
})

db.EMP.find().forEach(function (x) {

    print ((x.sal)/(12))

})

db.EMP.find().forEach(function (x) {

    print (Math.max((x.sal)*(1.2),(x.sal+500)))

})

db.EMP.find().forEach(function (x) {
   
   var d = new Date(); 
   print ((d - x.hiredate)/(1000*60*60*24));
    
})
    
