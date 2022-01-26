import { fromEvent, Observable } from "rxjs";
// using fromEvent to triger event each time the button is clicked
const buttonFromEvent = document.querySelector("button#hot-observable");
fromEvent<MouseEvent>(buttonFromEvent, "click").subscribe((event) => {
  console.log(event.type, event.x, event.y);
});
// using addEventListner to triger event each time the button is clicked
// const observable$ = new Observable<MouseEvent>((subscriber) => {
//   buttonFromEvent.addEventListener("click", (eventClick: MouseEvent) => {
//     subscriber.next(eventClick);
//   });
// });
// observable$.subscribe((eventClick) =>
//   console.log(eventClick.type, eventClick.x, eventClick.y)
// );
