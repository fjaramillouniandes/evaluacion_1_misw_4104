import { Component, OnInit } from '@angular/core';
import { VehicleService } from './services/vehicles.service';
import { VehicleModel } from './models/vehicles.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  vehicles: VehicleModel[] = [];
  error: unknown = null;

  ngOnInit() {
    this.getVehicles();
  }

  public getVehicles(){
        this.vehicleService.getVehicles().subscribe({
            error: (error) => {
                console.error('Algo salió mal obteniendo el listado de vehiculos:', error);
            },
            next: (vehicles) => {
                this.vehicles = vehicles;
            }
        });
    }
}
