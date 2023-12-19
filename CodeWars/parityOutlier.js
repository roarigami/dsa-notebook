function outlier(int) {
    let even =  int.filter(a => a % 2 == 0);
    let odd = int.filter(a => a % 2 !== 0);
    
    return even.length == 1 ? even[0] : odd[0];
}
//Short solution 