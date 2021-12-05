var findDisappearedNumbers = function(nums) {
    let ans=[];
    nums.sort((a,b)=> a-b);
    for (let i=1;i<=nums.length;i++){
        if(!nums.includes(i)){
            ans.push(i);
        }
    }
    return ans;
};

console.log(findDisappearedNumbers([1,1,1,3,5]));