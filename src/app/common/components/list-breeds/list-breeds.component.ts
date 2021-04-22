import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Breed, processedBreedModel } from '../../interfaces/breed.model';
import { BreedsService } from '../../services/breeds.service';

@Component({
  selector: 'app-list-breeds',
  templateUrl: './list-breeds.component.html',
  styleUrls: ['./list-breeds.component.scss']
})
export class ListBreedsComponent implements OnInit, OnDestroy {
  breedListSubscription: any;
  breedList: Breed;
  breedsFiltered: string[];
  processedBreedList: processedBreedModel[];
  displayImage;

  constructor(private breedsService: BreedsService) { }
  ngOnInit(): void {
  this.getBreedList();
  }
  /**
   * Get Breed List
   */
  getBreedList(){
    this.breedsService.getBreedList().then((res) => {
      if (res) {
        this.breedList = res;
        this.processBreedList();
      }
    })
  }

  /**
   * Process Breed List before passing it to search component
   */
  processBreedList() {
    this.processedBreedList = [];
    let message = this.breedList.message;
    for (const k in message) {
      if (message.hasOwnProperty(k)) {
        if (message[k]?.length > 0 && Array.isArray(message[k])) {
          message[k].forEach(element => {
            this.processedBreedList.push({
              value: k + '/' + element,
              name: (element[0].toUpperCase() + element.slice(1)) + ' ' + (k[0].toUpperCase() + k.slice(1))//element + ' ' + k //
            })
          });
        } else {
          this.processedBreedList.push({
            value: k,
            name: k[0].toUpperCase() + k.slice(1)
          })
        }
      }
    }
  }

  /**
   * Catch the selcted Dog
   */
  catchDogSelected(selected: processedBreedModel) {
    this.getSelectedBreedImage(selected.value);
  }

  /**
   * get Image
   */
  getSelectedBreedImage(breed) {
    // breed = breed.replace('-' , '/')
    this.breedsService.getBreedImage(breed).then((res) => { //'affenpinscher'
      if (res.status == 'success')
        this.displayImage = res.message;
    });
  }

  /**
   * On destroy clearing subscription to avoid memory leaks
   */
  ngOnDestroy() {
    this.breedListSubscription.unsubscribe();
  }
}
