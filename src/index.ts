import { Observable } from "rxjs";

const clickedButton = document.querySelector("button#hot-observable");
const hotObservable$ = new Observable<any>((subscriber) => {
  clickedButton.addEventListener("click", (event) => subscriber.next(event));
});
hotObservable$.subscribe((clickedButtonEvent) =>
  console.log(
    "subscription 1",
    clickedButtonEvent.type,
    clickedButtonEvent.x,
    clickedButtonEvent.y
  )
);
setTimeout(
  () => {
    console.log("Subscription 2 starts");
    hotObservable$.subscribe((clickedButtonEvent) =>
      console.log(
        "subscription 2",
        clickedButtonEvent.type,
        clickedButtonEvent.x,
        clickedButtonEvent.y
      )
    );
  },

  5000
);
