import { catchError, EMPTY, Observable, of } from "rxjs";

const httpResquestfailed$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error("timeout"));
  }, 3000);
});
console.log("application start");
httpResquestfailed$.pipe(catchError(() => EMPTY)).subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err),
  complete: () => console.log("subscription complete"),
});
