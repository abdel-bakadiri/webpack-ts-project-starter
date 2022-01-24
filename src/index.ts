import { Observable, of } from "rxjs";

const obs$ = of("Abdel", "Abdelouahab", "Abdou");
obs$.subscribe((val) => console.log(val));
