import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MySubComponent } from './my-sub/my-sub.component';
import { MixDataBindingComponent } from './mix-data-binding/mix-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MySubComponent,
    MixDataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
