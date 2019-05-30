import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { NavBarComponent } from './navBar/navBar.component';
import { CustomMaterialModule } from './core/material.module';
import { DriverFormComponent } from './driverForm/driverForm.component';
import { ReservationsComponent } from './Reservations/Reservations.component';
import { VehiclesComponent } from './Vehicles/Vehicles.component';
import { DriversComponent } from './Drivers/Drivers.component';
import { Reservations_TableComponent } from './Reservations_Table/Reservations_Table.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      NavBarComponent,
      DriverFormComponent,
      ReservationsComponent,
      VehiclesComponent,
      DriversComponent,
      Reservations_TableComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      CommonModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatSelectModule,
      MatTabsModule,
      FormsModule,
      CustomMaterialModule,
      ReactiveFormsModule,
      MatFormFieldModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
