import { forkJoin, fromEvent, Observable } from "rxjs";
import { combineLatest } from "rxjs/internal/observable/combineLatest";
const temperatureInput = document.querySelector("input#temperature-input");
const conversionDropDownInput = document.querySelector(
  "select#conversion-dropdown"
);
const resultText = document.querySelector("p#result-text");
const temperature$ = fromEvent<any>(temperatureInput, "input");
const conversion$ = fromEvent<any>(conversionDropDownInput, "input");
combineLatest([temperature$, conversion$]).subscribe(
  ([temepratureInputEvent, conversionInputEvane]) => {
    const temperature = Number(temepratureInputEvent.target["value"]);
    const convertionType = conversionInputEvane.target["value"];
    let result;
    if (convertionType === "f-to-c") {
      result = ((temperature - 32) * 5) / 9;
    }
    if (convertionType === "c-to-f") {
      result = (temperature * 9) / 5 + 32;
    }
    resultText.innerHTML = String(result);
  }
);
