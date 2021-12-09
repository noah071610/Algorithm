
var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
        console.log(nums,i);
    }
};

var removeDuplicates2 = function (nums) {
    let set = [...new Set(nums)];
    let answer = set.length;
    set = set.concat(Array.from({length:nums.length - set.length},()=>'_'));
    for (let i = 0; i < set.length; i++) {
        if(set[i] === '_') {
            nums.splice(i,1,'_')
        } else {
            nums[i] = set[i]
        }
    }
    return answer;
}

const nums = [1,1,1,1,2,2,3,5,4,4]
console.log(removeDuplicates(nums));
console.log(nums);