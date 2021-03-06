import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";
import { FileUploadModule} from 'ng2-file-upload';

@NgModule({
  imports: [BrowserModule, FormsModule, FileUploadModule],
  declarations: [AppComponent, FormComponent, ListComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
