import { from } from "rxjs";
const promise = new Promise((resolve, reject) => {
  reject("Error");
});
from(promise).subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log("Complete"),
});
