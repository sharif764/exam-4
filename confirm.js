// problem 1.
// function for seerToMon
function seerToMon(seer){
    if(typeof seer == 'string' || seer <= 0){
       return 'Please enter Seer Quantity!';
    }
    let mon = seer / 40;
    return mon;
}
console.log(seerToMon(40));

// problem 2.
// function for totalSales
function totalSales(shirtQuantity,pantQuantity,jutaQuantity){
    if (typeof shirtQuantity,pantQuantity,jutaQuantity == 'string' ||(shirtQuantity||pantQuantity||jutaQuantity)<= 0){
        return "Please enter the Shirt,pant and juta's quantity!";
    }
    const price = [100,200,500];
    let shirtTotalPrice = price[0] * shirtQuantity;
    let pantTotalPrice = price[1] * pantQuantity;
    let jutaTotalPrice = price[2] * jutaQuantity;
    let totalPrice = shirtTotalPrice + pantTotalPrice + jutaTotalPrice;
    return totalPrice;
}
console.log(totalSales (1,1,1));

// problem 3.
// function for deliveryCost
function deliveryCost(deliveryQuantity){
    if(typeof(deliveryQuantity)=='string'||deliveryQuantity<=0){
        return 'Please enter the deliveryQuantity!';
    }
    // delivery quantity 100 hole price.
    else if(deliveryQuantity<=100){
        let totalPrice = deliveryQuantity * 100;
        return totalPrice;u
    }
       /*delivery 100 er cheye besi hole.
        outOf100Quantity =100 er teke beshi delivery gula.;
         priceForOutOf100 = 100 er chaite beshi jotogula delivery hoice tar price; */
    else if(deliveryQuantity<=200){
    let outOf100Quantity = deliveryQuantity - 100;
    let priceFor100Delivery = (deliveryQuantity-outOf100Quantity)*100;
    let priceForOutOf100 = outOf100Quantity * 80;
    let totalPrice = priceFor100Delivery + priceForOutOf100 ;
    return totalPrice;
    }
       /*delivery 200 er cheye besi hole.
        outOf200Quantity =200 er teke beshi delivery gula.;
         priceForOutOf100 = 100 er chaite beshi jotogula delivery hoice tar price;
         priceFor200Delivery=200 er chaite beshi jotogula delivery hoice tar price; */
    else {
    let outOf200Quantity = deliveryQuantity - 200;
    let priceFor100Delivery = (deliveryQuantity-(outOf200Quantity+100))*100;
    let priceFor200Delivery = (deliveryQuantity-(outOf200Quantity+100))*80;
    let priceForOutOf200 = outOf200Quantity * 50;
    let totalPrice = priceFor100Delivery + priceFor200Delivery + priceForOutOf200;
    return totalPrice ;
    }
}
console.log(deliveryCost(500));

// problem 4.
// function for perfectFriend
function perfectFriend(names){
    if(typeof names == 'number'){
        return 'Please enter your some friends name!';
    }
    let nameOf5Char ='';
    for(let elment of names){
        if(elment.length==5){
            nameOf5Char = elment;
            break ;
        }
    }
    return nameOf5Char; 
}
var names = perfectFriend(['f','abbbb','abcde','sssss']);
 console.log(names);