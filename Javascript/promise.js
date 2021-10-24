var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("OK");
  }, 2000);
});

p.then().then(function (data) {
  console.log(data);
});

new Promise((resolve, reject) => {
  resolve("Success!");
})
  .then(() => {
    throw Error("Oh noes!");
  })
  .catch((error) => {
    // return 말고 throw Error 해야한다.
    // throw Error 발생시 다음 체이닝으로(then 포함) 이동 또는 발생 후 종료
    throw Error("oh noes! second");
    return "actually, that worked";
  })
  .catch((error) => console.log(error.message));

new Promise(function (resolve, reject) {
  resolve("OK");
})
  .then((data) => {
    throw new Error("NO");
  })
  .catch((err) => {
    throw new Error("NO2");
  })
  .catch((err) => console.log(err.message));

Promise.resolve("Success!")
  .then(() => {
    throw Error("첫번째 에러 발생");
  })
  .catch((error) => {
    console.log("나를 건너가라", `(${error.message})`);
  }) // 이 친구가 없으면 then 을 건너띄고 마지막 catch 실행
  .then((data) => {
    throw Error("두번째 에러 발생");
  })
  .catch((error) => console.log(error.message));
