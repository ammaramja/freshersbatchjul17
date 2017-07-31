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

getAd(by_name:any)
{

    this.Ads.forEach((ad)=>{
        if(ad.name === by_name)
        {
            return ad;
        }
    })
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

}
