import { MechanicsService } from 'src/app/core/services/mechanics.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Mechanic } from 'src/app/shared/models/mechanic.model';
import { FormBuilder } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-mechanic-search',
  templateUrl: './mechanic-search.component.html',
  styleUrls: ['./mechanic-search.component.scss']
})
export class MechanicSearchComponent implements OnInit {

  mechanics: Mechanic[] = [];
  filteredMechanics: Observable<Mechanic[]>;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mechanicsService: MechanicsService
  ) { }

  public ngOnInit(): void {
    this.form = this.fb.group({
      filter: null,
    });

    this.mechanicsService.getAll().subscribe(data => {
      this.mechanics = data;
    });

    this.filteredMechanics = this.mechanicFilter.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.lastName),
        map(lastName => lastName ? this.filter(lastName) : this.mechanics.slice())
      );
  }

  displayFn(mechanic: Mechanic): string {
    return mechanic && mechanic.lastName && mechanic.firstName ? mechanic.lastName + ' ' + mechanic.firstName : '';
  }

  private filter(name: string): Mechanic[] {
    const filterValue = name.toLowerCase();
    return this.mechanics.filter(mechanic => mechanic.lastName.toLowerCase().indexOf(filterValue) === 0);
  }

  get mechanicFilter() {
    return this.form.get('filter') as FormArray;
  }
}
