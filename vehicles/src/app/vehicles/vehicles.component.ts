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

  public getNumberOfVehiclesPerBrand(): { marca: string, count: number }[] {
    const counts: { [marca: string]: number } = this.vehicles.reduce((acc, vehicle) => {
      const brand = vehicle.marca;
      acc[brand] = (acc[brand] || 0) + 1;
      return acc;
    }, {} as { [marca: string]: number });

    return Object.entries(counts).map(([marca, count]) => ({ marca, count }));
  }
}
