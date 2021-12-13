var majorityElement = function(nums) {
    return Number(Object.entries(nums.reduce((acc,cur)=> {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
    },{})).find((v)=> v[1] > nums.length/2)[0]);
};

console.log(majorityElement([2,2,3,3,3]));