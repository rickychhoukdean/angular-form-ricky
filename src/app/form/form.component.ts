import { Component, OnInit } from "@angular/core";
import { Example } from "./example";
import { FileUploader, FileItem, ParsedResponseHeaders } from "ng2-file-upload";
//Post route to repl.it Node server
const uploadAPI =
  "https://Basic-backend-eA-coding-test.rickychhoukdean.repl.co/api";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {

  model: Example = new Example();
  submitted: Boolean = false;
  errorMsg: String = "";
  
  public uploader: FileUploader = new FileUploader({
    url: uploadAPI,
    itemAlias: "file"
  });

  ngOnInit() {
    //Adds form data to the POST request
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append("name", this.model.name);
      form.append("dob", this.model.dob);
      form.append("option", this.model.option);
      form.append("file", this.model.file);
    };

    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    //If response from POST is an error show error handling
    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.errorMsg = `Error submitting form : ${response}`;
      this.submitted = false;
    };
    //If response from POST is success show success
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      this.submitted = true;
      this.errorMsg = "";
    };
  }
}
