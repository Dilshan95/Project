import {  Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VehiclesComponent } from './Vehicles/Vehicles.component';
import { DriversComponent } from './Drivers/Drivers.component';
import { DriverUpdateComponent } from './driverUpdate/driverUpdate.component';
import { IncumbentComponent } from './Incumbent/Incumbent.component';
import { VehicleUpdateComponent } from './vehicleUpdate/vehicleUpdate.component';
import { ReservationsViewComponent } from './reservations-view/reservations-view.component';
import { DialogDeleteConfirmComponent } from './dialog-delete-confirm/dialog-delete-confirm.component';



export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'Vehicles', component: VehiclesComponent },
    { path: 'Drivers', component: DriversComponent },
    { path: '', component: LoginComponent },
    { path: 'updateDriver', component: DriverUpdateComponent },
    { path: 'Incumbent', component: IncumbentComponent },
    { path: 'Update', component: VehicleUpdateComponent },
    { path: 'viewReservation/:reservationId', component: ReservationsViewComponent},
    { path: 'driverReservation/:id', component: DialogDeleteConfirmComponent},
  ];
  
  