import { Component, OnInit, Input, Output} from '@angular/core';
import {AffirmationService} from '../../_services/affirmation.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-affirmation-list',
  templateUrl: './affirmation-list.component.html',
  styleUrls: ['./affirmation-list.component.css'],
  providers: [AffirmationService]
})

export class AffirmationListComponent implements OnInit {

    public affirmations;

    constructor(private affirmationService: AffirmationService ) { }

    ngOnInit() {
        this.affirmationService.getAffirmations().subscribe(affirmations => {
            this.affirmations = affirmations;
        });
    }

    edit(affirmation): void {
        let Index = _.findIndex(this.affirmations, {id: affirmation.id});
        this.affirmations[Index].editing = true;
    }

    onSubmitted(affirmation): void {
        this.affirmationService.update(affirmation.id, affirmation.title).subscribe(affirmation => {
            let Index = _.findIndex(this.affirmations, {id: affirmation.id});
            this.affirmations[Index] = affirmation;
        });
        let Index = _.findIndex(this.affirmations, {id: affirmation.id});
        this.affirmations[Index].editing = false;
    }

    onCreated($event: boolean): void {
        this.affirmationService.getAffirmations().subscribe(affirmations => {
            this.affirmations = affirmations;
        });
    }

    onDeleted(affirmation): void {
        this.affirmationService.delete(affirmation.id).subscribe();
        this.affirmations = this.affirmations.filter(item => item !== affirmation);
    }
}
