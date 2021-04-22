import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { processedBreedModel } from 'src/app/common/interfaces/breed.model';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


@Component({
  selector: 'search-breed',
  templateUrl: './search-breed.component.html',
  styleUrls: ['./search-breed.component.scss']
})
export class SearchBreedComponent implements OnInit {
  public model: processedBreedModel = {
    value: 'pomeranian',
    name: 'Pomeranian'
  }
  @Output() selectedBreed = new EventEmitter<processedBreedModel>();
  @Input() breedList: processedBreedModel[];
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.getElementsByClassName('dropdown-menu').addClass('dropdown-menu-height')
  }
  /**
   * Emit Value
   */
  emitSelectedBreed(value) {
    this.selectedBreed.emit(value);
  }


  resultFormatBandListValue(value: any) {
    return value.name;
  }

  /**
   *  @param value  binds the string value  
   */
  inputFormatBandListValue = (value: any) => {
    this.emitSelectedBreed(value);
    return value.name;
  };

  /**
   * Format the display string in drop down
   * */
  formatter = (result: string) => result;

  /**
   * Search term
   */
  search: OperatorFunction<string, readonly {}[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => (Array.isArray(this.breedList) && term.length < 1) ? this.breedList

        : this.breedList.filter(v => v['name'].toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


}
