import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

interface newsItem {
  categorie: string;
  content: string;
}
const news$ = new Observable<newsItem>((subscriber) => {
  setTimeout(() => {
    subscriber.next({
      categorie: "Business",
      content: "Microsft leader in IT Marketing",
    });
  }, 1000);
  setTimeout(() => {
    subscriber.next({
      categorie: "Sport",
      content: "Sport infos",
    });
  }, 3000);
  setTimeout(() => {
    subscriber.next({
      categorie: "Business",
      content: "Business info 2",
    });
  }, 5000);
  setTimeout(() => {
    subscriber.next({
      categorie: "Business",
      content: "busines informations 3",
    });
  }, 7000);
});
const businesNews$ = news$.pipe(
  filter((newsItem) => {
    return newsItem.categorie === "Business";
  })
);
businesNews$.subscribe((businesInfo) => console.log(businesInfo));
// news$.subscribe((newItem) => console.log(newItem.content));
