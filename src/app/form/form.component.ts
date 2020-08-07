import { Component, OnInit } from "@angular/core";
import { Example } from "./example";
import { HttpService } from "./http.service";
import { FileUploader } from "ng2-file-upload";
const uploadAPI =
  "https://Basic-backend-eA-coding-test.rickychhoukdean.repl.co";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: uploadAPI,
    itemAlias: "file",
  });

  model: Example = new Example();
  constructor(private _httpService: HttpService) {}

  submitted: Boolean = false;
  errorMsg: String = "";

  onSubmit() {
    // this._httpService.postData(this.model).subscribe(
    //   data => {
    //     this.submitted = true;
    //   },
    //   error => (this.errorMsg = `Error submitting form : ${error.statusText}`)
    // );

    console.log(this.model);
  }
  ngOnInit() {

    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append("name",this.model.name); //note comma separating key and value
      form.append("dob",this.model.dob);
      form.append("option",this.model.option);
      form.append("file",this.model.file);
    };
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      console.log(item, "item", response, "response");
    };
  }
}
