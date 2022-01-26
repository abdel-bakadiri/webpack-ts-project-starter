import { interval, Observable } from "rxjs";
// const interval$ = interval(1000);
// const subscription = interval$.subscribe((value) => console.log(value));
// setTimeout(() => {
//   console.log("Start unsubscription");
//   subscription.unsubscribe();
// }, 5000);

const myInterval$ = new Observable((subscriber) => {
  let digit = 0;
  const idInterval = setInterval(() => {
    subscriber.next(digit++);
  }, 1000);
  return () => clearInterval(idInterval);
});
myInterval$.subscribe((digitValue) => console.log(digitValue));
