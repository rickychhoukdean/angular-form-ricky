import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

submitted = false;

  model: Example = new Example();

  onSubmit() {
    this.submitted = true;

  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }


  ngOnInit() {
  }

}



class Example {
  constructor(
    public name: string = "",
    public date: string = "",
    public file: string = "",
    public option: string = "",
    public radio: string = ""
  ) {}
}
