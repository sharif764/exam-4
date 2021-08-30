// problem 1.
function seerToMon(seer) {
    if (typeof seer == 'string' || seer <= 0) {
        return 'Please enter a positive Number.';
    }
    var mon = seer / 40;
    return mon;
}
// problem 2.
function totalSales(shirtQuantity, pantQuantity, jutaQuantity) {
    if (typeof shirtQuantity, pantQuantity, jutaQuantity == 'string' || (shirtQuantity || pantQuantity || jutaQuantity) <= 0) {
        return "Please enter the Shirt,pant and juta's quantity.";
    }
    const price = [100, 200, 500];
    let shirtTotalPrice = price[0] * shirtQuantity;
    let pantTotalPrice = price[1] * pantQuantity;
    let jutaTotalPrice = price[2] * jutaQuantity;
    var totalPrice = shirtTotalPrice + pantTotalPrice + jutaTotalPrice;
    return totalPrice;
}
// problem 3.
function deliveryCost(deliveryQuantity) {
    if (typeof deliveryQuantity == 'string' || deliveryQuantity < 0) {
        return 'Please enter the deliveryQuantity.';
    }
    else if (deliveryQuantity <= 100) {
        return total = deliveryQuantity * 100;
    }
    /*outOf100Quantity =100 er teke beshi delivery gula.;
      priceForOutOf100 = 100 er chaite beshi jotogula delivery hoice tar price;*/
    else if (deliveryQuantity <= 200) {
        var outOf100Quantity = deliveryQuantity - 100;
        var priceFor100Delivery = (deliveryQuantity - outOf100Quantity) * 100;
        var priceForOutOf100 = outOf100Quantity * 80;
        var totalPrice = priceFor100Delivery + priceForOutOf100;
        return totalPrice;
    }
    /*outOf200Quantity =200 er teke beshi delivery gula.;
      priceForOutOf100 = 100 er chaite beshi jotogula delivery hoice tar price;
      priceFor200Delivery=200 er chaite beshi jotogula delivery hoice tar price;*/
    else {
        var outOf200Quantity = deliveryQuantity - 200;
        var priceFor100Delivery = (deliveryQuantity - (outOf200Quantity + 100)) * 100;
        var priceFor200Delivery = (deliveryQuantity - (outOf200Quantity + 100)) * 80;
        var priceForOutOf200 = outOf200Quantity * 50;
        var totalPrice = priceFor100Delivery + priceFor200Delivery + priceForOutOf200;
        return totalPrice;
    }
}
// problem 4.
function perfectFriend(names) {
    if (typeof names == 'number') {
        return 'Please enter your some friends name.';
    }
    let nameOf5Char = '';
    for (let elment of names) {
        if (elment.length == 5) {
            nameOf5Char = elment;
        }
    }
    return nameOf5Char;
}