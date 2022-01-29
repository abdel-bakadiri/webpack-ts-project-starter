import { concat, Observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

concat(
  of(1, 2, 3, 4, 5, 6),
  new Observable((subscriber) => {
    setTimeout(() => subscriber.error(new Error("404")), 5000);
  })
)
  .pipe(
    tap((value) => console.log("original value", value)),
    map((value) => (typeof value === "number" ? value * 2 : value)),
    tap((value) => console.log("maped value", value)),
    filter((value) => value > 3),
    tap({
      next: (value) => console.log(value),
      error: (err) => console.log("Error happened", err.message),
      complete: () => console.log("complete subscription"),
    })
  )
  .subscribe((value) => console.log("Resultat value", value));
