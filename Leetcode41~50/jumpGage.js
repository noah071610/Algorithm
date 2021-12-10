var canReach = function(arr, start) {
    let naljiBreak = false;
    let dp = Array.from({length:arr.length},()=> false)
    const dfs = (index) => {
        if(!naljiBreak && !dp[index] && (index <= arr.length-1 || index >= 0)) {
            if(arr[index] === 0) {
               return naljiBreak = true;
            }
            dp[index] = true;
            dfs(index+arr[index]);
            dfs(index-arr[index]);
        }
    }
    dfs(start);
    return naljiBreak;
};

console.log(canReach([3,0,2,1,2],2));