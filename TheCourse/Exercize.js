function gradeSchoolAddition(arr1,arr2){
    let sum =0;
    let cur=0;
    var arr=[0,0,0];
    let n1 =arr1.length;
    let n2 = arr2.length;
    let n = Math.max(n1,n2);
    if (n===n1) { var l=n1; var s=n2;} else {var l=n2; var s=n1;}
    for(let i=n-1; i>=0; i--){
        //if(i<=s){
            sum= arr1[i]+arr2[i]+cur;
            arr[i+1] = sum %10;
            cur = sum /10;
        //}
        
    }
    //arr[0] = cur;

    return arr;
}

console.log( gradeSchoolAddition( [9,9,9] , [1,1,1]) );