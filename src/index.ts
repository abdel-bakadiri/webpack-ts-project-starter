import { Observable, of } from "rxjs";
import { concatMap } from "rxjs/operators";

const source$ = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("A"), 3000);
  setTimeout(() => subscriber.next("B"), 6000);
  setTimeout(() => subscriber.next("C"), 9000);
});
source$
  .pipe(concatMap(() => of(1, 2, 3)))
  .subscribe((value) => console.log(value));
