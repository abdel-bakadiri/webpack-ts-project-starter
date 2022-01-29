import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
const slider = document.querySelector("input#slider");

fromEvent<any>(slider, "input")
  .pipe(
    debounceTime(3000),
    map((event) => event.target["value"])
  )
  .subscribe((inputValue) => console.log(inputValue));
