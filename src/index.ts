import { Observable, timer } from "rxjs";
// timer(5000).subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   complete: () => console.log("complete"),
// });
const myTimer$ = new Observable<number>((subscriber) => {
  const timeoutId = setTimeout(() => {
    console.log("timeout");
    subscriber.next(0);
    subscriber.complete();
  }, 5000);
  // teardown logic to clen up
  return () => clearTimeout(timeoutId);
});
const subscription = myTimer$.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => console.log("complete !"),
});
setTimeout(() => {
  subscription.unsubscribe();
}, 2000);
