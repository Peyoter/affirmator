import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AffirmationService } from '../../../../_services/affirmation.service';

@Component({
  selector: 'app-create-affirmation',
  templateUrl: './create-affirmation.component.html',
  styleUrls: ['./create-affirmation.component.css']
})
export class CreateAffirmationComponent implements OnInit {
    @Output() onCreated = new EventEmitter<any>();

    closeResult: string;

    affirmationForm: FormGroup;

    constructor(private modalService: NgbModal,
                private affirmationService: AffirmationService,
                private formBuilder: FormBuilder,
    ) {}

    ngOnInit() {
        this.affirmationForm = this.formBuilder.group({
            title: ['', Validators.required],
        });
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    save() {
        this.affirmationService.store(this.f.title.value).subscribe(data => {
            this.onCreated.emit(null);
            this.affirmationForm.controls.title.setValue('');
            this.modalService.dismissAll();
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    get f() { return this.affirmationForm.controls; }
}
