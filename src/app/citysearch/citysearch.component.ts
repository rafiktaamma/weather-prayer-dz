import {AfterContentChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-citysearch',
  templateUrl: './citysearch.component.html',
  styleUrls: ['./citysearch.component.css']
})
export class CitysearchComponent implements OnInit, AfterViewInit , AfterContentChecked  {
  selectedOption = '16';
  constructor(
    private router: Router,
  ) {
  }


  ngOnInit() {
    jQuery('.selectpicker').selectpicker({
    });
  }

  ngAfterViewInit() {

  }
  ngAfterContentChecked() {

  }
  search() {
    console.log(this.selectedOption);
    this.router.navigate(['/search'], { queryParams: { city: this.selectedOption }  });
  }
}
