import {Component, ViewEncapsulation} from '@angular/core';

//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'profile-modal',
  templateUrl: './profile-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: black;
      color: white;
    }
  `]
})
export class ProfileModalComponent {
  //closeResult: string;

  constructor() {}

  open(content) {
    //this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}