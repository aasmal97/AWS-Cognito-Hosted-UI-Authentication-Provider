function delayAsyncFunc(delay: number, promiseFunc: () => Promise<any>) {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      const result = await promiseFunc();
      resolve(result);
    }, delay);
  });
}
export default delayAsyncFunc;
