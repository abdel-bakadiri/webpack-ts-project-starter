import { ajax, AjaxResponse } from "rxjs/ajax";
const ajax$ = ajax<any>("https://random-data-api.com/api/name/random_name");
ajax$.subscribe((data) => {
  console.log("Subscription 1");
  console.log(data.response.name);
});
ajax$.subscribe((data) => {
  console.log("Subscription 2");
  console.log(data.response.name);
});
ajax$.subscribe((data) => {
  console.log("Subscription 3");
  console.log(data.response.name);
});
