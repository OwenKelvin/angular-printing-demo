import { Component, VERSION } from "@angular/core";
import { PrintService } from "./print/print.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  constructor(private printService: PrintService) {}
  printMe() {
    this.printService.popupPrint(".printable");
  }
}
