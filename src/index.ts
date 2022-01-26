import { fromEvent, Observable } from "rxjs";
// using fromEvent to triger event each time the button is clicked
const buttonFromEvent = document.querySelector("button#hot-observable");
const fromEvent$ = fromEvent<MouseEvent>(buttonFromEvent, "click").subscribe(
  (event) => {
    console.log(event.type, event.x, event.y);
  }
);
setTimeout(() => {
  console.log("unsubscribe begin");
  fromEvent$.unsubscribe();
}, 5000);
// using addEventListner to triger event each time the button is clicked
// const observable$ = new Observable<MouseEvent>((subscriber) => {
//   const handleFn = (eventClick: MouseEvent) => {
//     console.log(" Teardown ");
//     subscriber.next(eventClick);
//   };
//   buttonFromEvent.addEventListener("click", handleFn);
//   return () => {
//     buttonFromEvent.removeEventListener("click", handleFn);
//   };
// });
// const subscription = observable$.subscribe((eventClick) =>
//   console.log(eventClick.type, eventClick.x, eventClick.y)
// );
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 5000);
