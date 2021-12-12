
var MinStack = function() {
    this.minstack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.minstack?.length >= 0) {
        this.minstack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minstack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.minstack?.length >= 0) {
        return this.minstack[this.minstack.length-1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let max = Number.MAX_SAFE_INTEGER;
    this.minstack.forEach((v)=> {
        if(max > v) {
            max = v;
        }
    })
    return max;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */