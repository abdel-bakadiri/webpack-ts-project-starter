import { Observable, of } from "rxjs";
of("A", "B", "C").subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("of notifications are completed"),
});
function omyOf(...args: string[]): Observable<string> {
  return new Observable((subsriber) => {
    args.forEach((arg) => subsriber.next(arg));
    subsriber.complete();
  });
}
omyOf("D", "E", "F").subscribe({
  next: (val) => console.log(val),
  complete: () => console.log("MyOf comleted"),
});
