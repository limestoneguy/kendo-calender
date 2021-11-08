import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';

import { AppComponent } from './app.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { HolidayConfig } from './holiday-config/holiday-config.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HolidayConfig],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IntlModule,
    LabelModule,
    LayoutModule,
    DateInputsModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
  ],
})
export class AppModule {}
