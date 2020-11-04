import { Injectable } from "@angular/core";

import printPageHTML from "!!raw-loader!./print-page.html";

@Injectable({
  providedIn: "root"
})
export class PrintService {
  popupPrint(selector: string) {
    const printContents = document.querySelector(selector).innerHTML;
    const popupWin = window.open(
      "",
      "_blank",
      "top=0,left=0,height=auto,width=auto"
    );
    popupWin.document.open();
    popupWin.document.write(
      printPageHTML.replace("{{printContents}}", printContents)
    );
  }
}
