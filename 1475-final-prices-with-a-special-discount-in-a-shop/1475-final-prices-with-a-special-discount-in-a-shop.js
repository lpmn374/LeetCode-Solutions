/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const stack=[];
    let discount;
    if (prices.length>=2) stack.push(prices[prices.length-1]);
    for(let i=prices.length-2;i>=0;i--){
        discount=prices[i];
        while(stack.length>0)
            if (prices[i]<stack[stack.length-1]) stack.pop();
            else{
                prices[i]-=stack[stack.length-1];
                break;
            }
        stack.push(discount);
    }
    return prices;
};