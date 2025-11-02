import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleModel } from '../models/vehicles.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = environment.baseUrl + '202212_MISW4104_Grupo1.json';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(this.apiUrl);
  }
}