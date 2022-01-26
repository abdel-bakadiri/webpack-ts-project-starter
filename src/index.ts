import { forkJoin, Observable } from "rxjs";

const observable1$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next("A");
    subscriber.complete();
  }, 3000);
  return () => {
    console.log("teardown observable 1");
  };
});
const observable2$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error("404"));
  }, 5000);
  return () => {
    console.log("teardown observable 2");
  };
});
forkJoin([observable1$, observable2$]).subscribe({
  next: (value) => {
    console.log(value);
  },
  error: (err) => console.log(err.message),
});
