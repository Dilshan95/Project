import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './navBar/navBar.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatListModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleModule, RecurrenceEditorModule,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {DatePickerAllModule} from '@syncfusion/ej2-angular-calendars';
import { VehicleSelectionComponent } from './vehicleSelection/vehicleSelection.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      NavBarComponent,
      HomeComponent,
      ScheduleComponent,
      VehicleSelectionComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatSelectModule,
      MatTabsModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatListModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      HttpClientModule,
      ScheduleModule,
      RecurrenceEditorModule,
      DropDownListModule,
      DatePickerAllModule
   ],
   providers: [
      DayService,
      WeekService,
      WorkWeekService,
      MonthService,
      MonthAgendaService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
