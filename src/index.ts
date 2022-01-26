import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";
const perso$ = ajax("https://random-data-api.com/api/name/random_name");
const city$ = ajax("https://random-data-api.com/api/nation/random_nation");
const food$ = ajax("https://random-data-api.com/api/food/random_food");
// forkJoin([perso$, city$, food$]).subscribe(([person, city, food]) =>
//   console.log(`Mr ${person}`)
// );
forkJoin<any>([perso$, city$, food$]).subscribe(([person, city, food]) =>
  console.log(
    `${person.response.first_name} live in ${city.response.capital} and like to eat ${food.response.dish}`
  )
);

// first_name
//  capital
// dish
