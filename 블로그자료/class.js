var extendClass = (function () {
  function Bridge() {}
  return function (Parent, Child) {
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;
    Child.prototype.super = Parent;
  };
})();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function () {
  return this.name + "입니다.";
};

Person.prototype.getAge = function () {
  return this.age + "살 입니다.";
};

Person.getInfomation = function (instance) {
  console.log(this.name + "님의 정보입니다.");
  return {
    name: instance.name,
    age: instance.age,
  };
}; // 스태틱 맴버

function Developer(name, age) {
  this.super(name, age);
  this.algorithm = "high";
  this.girlFriend = false;
}

extendClass(Person, Developer);

Developer.prototype.thinking = function () {
  return "회사에 갈때도 최단거리 다익스트라 알고리즘을 사용합니다.";
};
Developer.prototype.eatSomeFood = function () {
  return "이 메뉴를 먹으면 발생하는 기회비용을 다이나믹프로그래밍으로 구현해 최선의 메뉴를 찾습니다.";
};

Developer.prototype.makeGirlFriend = function () {
  this.girlFriend = true;
};

let me = new Person("hyunSoo", 2);
let v = new Developer("장현수", 28);

console.log(me);
