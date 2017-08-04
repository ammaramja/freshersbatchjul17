import { Injectable } from '@angular/core';

@Injectable()

export class AdService {
    
    Ads = [

    {name: 'Chair', cat: "Furniture", desc:"Buy me!"},
    
    {name: 'S7', cat : "Mobile", desc : "Me too!"}
    
    ];

getAllAds() {

    return this.Ads;
}

getAd(by_name:any):Object
{
    let ad_d:Object;

    this.Ads.forEach((ad)=>{
        if(ad.name === by_name)
        {
            console.log("ad_arrayyyyyy",ad);
            ad_d = ad;
            return ad;
        }
    })

    
    return ad_d;
}

setAd(newAd:any)
{
    this.Ads.push(newAd);
}

deleteAd(by_name:any)
{
    let index = 0;
    this.Ads.forEach((ad)=>
    {
        if(!(ad.name === by_name))
        {
            index +=1;
        }
        
    })

    this.Ads.splice(index,1);

    console.log(this.getAllAds());   
}

editAdvertise(new_name:any,new_cat:any,new_desc:any)
{

}

}
