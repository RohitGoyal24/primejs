var isprime=function(n){
    var flag=false;
    var i=2;
    while(i<=n/2)
    {
       if(n%i==0)
       {
       flag=true;
       break;
       }
       ++i;
    }
    if(!flag)
    {
        console.log("True");
    }
    else{
        console.log("False");
    }
};
console.log(isprime(97));
console.log(isprime(98));
