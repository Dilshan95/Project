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
import { MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatSortModule, MatExpansionModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { NavBarComponent } from './navBar/navBar.component';
import { CustomMaterialModule } from './core/material.module';
import { DriverFormComponent } from './driverForm/driverForm.component';
import { ReservationsComponent } from './Reservations/Reservations.component';
import { VehiclesComponent } from './Vehicles/Vehicles.component';
import { DriversComponent } from './Drivers/Drivers.component';
import { Reservations_TableComponent } from './Reservations_Table/Reservations_Table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { VehicleFormComponent } from './vehicleForm/vehicleForm.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleService } from './_services/vehicle.service';
import { DriverService } from './_services/driver.service';
import { VehiclesTableComponent } from './vehicles-table/vehicles-table.component';
import { DriversTableComponent } from './drivers-table/drivers-table.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DriverUpdateComponent } from './driverUpdate/driverUpdate.component';
import { IncumbentComponent } from './Incumbent/Incumbent.component';
import { DepartmentsTableComponent } from './departments-table/departments-table.component';
import { FacultyTableComponent } from './faculty-table/faculty-table.component';
import { VehicleUpdateComponent } from './vehicleUpdate/vehicleUpdate.component';
import { DepartmentUpdateComponent } from './departmentUpdate/departmentUpdate.component';
import { FacultyUpdateComponent } from './faculty-update/faculty-update.component';



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
      Reservations_TableComponent,
      VehicleFormComponent,
      VehiclesTableComponent,
      DriversTableComponent,
      DriverUpdateComponent,
      IncumbentComponent,
      DepartmentsTableComponent,
      FacultyTableComponent,
      VehicleUpdateComponent,
      DepartmentUpdateComponent,
      FacultyUpdateComponent
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
      MatFormFieldModule,
      HttpClientModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatExpansionModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatNativeDateModule
   ],
   providers: [
      VehicleService,
      DriverService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents:[DepartmentsTableComponent,DepartmentUpdateComponent],
})
export class AppModule { }
