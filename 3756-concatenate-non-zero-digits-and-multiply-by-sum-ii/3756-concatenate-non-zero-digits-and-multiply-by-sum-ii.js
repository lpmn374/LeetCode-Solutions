/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
    const mod=Math.pow(10,9)+7, max=100001, pow=new Array(max);
    pow[0]=1;
    for(let i=1;i<max;i++) pow[i]=(pow[i-1]*10)%mod;
    let n=s.length, sum= new Array(n+1), x= new Array(n+1), len=new Array(n+1);
    sum[0]=0, x[0]=0, len[0]=0;
    for(let i=0;i<n;i++){
        let num=Number(s[i]);
        sum[i+1]=sum[i]+num;
        x[i+1]=num!==0? (x[i]*10+num)%mod:x[i];
        len[i+1]=len[i]+(num!==0?1:0);
    }
    let result=[];
    for(let [l,r] of queries){
        r++;
        const leng=len[r]-len[l], sub=Number((BigInt(x[l])*BigInt(pow[leng]))%BigInt(mod));
        let tmp=x[r]-sub;
        tmp=((tmp%mod)+mod)%mod;
        result.push((tmp*(sum[r]-sum[l]))%mod);
    }
    return result;
};