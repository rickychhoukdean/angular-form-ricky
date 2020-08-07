import { Component, OnInit } from "@angular/core";
import { Example } from "./example";
import { HttpService } from "./http.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  model: Example = new Example();
  constructor(private _httpService: HttpService) {}

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this._httpService
      .postData(this.model)
      .subscribe(
        data => console.log("data", data),
        error => console.error("error", error)
      );
    //  this._httpService
    //   .getData()
    //   .subscribe(
    //     data => console.log("data", data),
    //     error => console.error("error", error)
    //   );
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnInit() {}
}
