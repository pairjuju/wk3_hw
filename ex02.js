function orderTciket(callback){
    console.log("B is trying to help A buy ticket.");
    var result='done';
    callback(result);
}
orderTciket(order=>{
    console.log("a ask b to buy ticket!");
    console.log("b bought ticket for A");
});