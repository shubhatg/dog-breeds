import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Breed } from '../interfaces/breed.model';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
/**
 * 
 * @param http Get Breed List
 */
  constructor(private http: HttpClient) { }
  listBreedUrl = `${environment.webApiUrl}breeds/list/all`;

public getBreedList(): Promise<Breed>{
   return this.http.get<Breed>(this.listBreedUrl).toPromise();
}
/**
 * Get Random image of selected breed
 * @param breedType 
 * @returns 
 */

public getBreedImage(breedType:string): Promise<any>{
 let  listBreedImgUrl =`${environment.webApiUrl}breed/${breedType}/images/random`;
  return this.http.get(listBreedImgUrl).toPromise()

}


}
