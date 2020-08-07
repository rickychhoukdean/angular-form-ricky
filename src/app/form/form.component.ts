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

  submitted: Boolean = false;
  errorMsg: String = "";

  onSubmit() {
    this._httpService.postData(this.model).subscribe(
      data => {
        this.submitted = true;
      },
      error => (this.errorMsg = `Error submitting form : ${error.statusText}`)
    );
  }
  ngOnInit() {}
}
