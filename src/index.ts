import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";
const randamName$ = ajax<any>(
  "https://random-data-api.com/api/name/random_name"
).pipe(map((ajaxResponse) => ajaxResponse.response.first_name));
const randamCity$ = ajax<any>(
  "https://random-data-api.com/api/nation/random_nation"
).pipe(map((ajaxResponse) => ajaxResponse.response.capital));
const randamFood$ = ajax<any>(
  "https://random-data-api.com/api/food/random_food"
).pipe(map((ajaxResponse) => ajaxResponse.response.dish));
forkJoin([randamName$, randamCity$, randamFood$]).subscribe(
  ([randomName, randomCity, randomFood]: any[]) =>
    console.log(
      `${randomName} live in ${randomCity} and like to eat ${randomFood}`
    )
);
