import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-livepix',
  templateUrl: './modal-livepix.component.html',
  styleUrls: ['./modal-livepix.component.css']
})
export class ModalLivepixComponent {
  @Output() close = new EventEmitter<void>(); // Emitir evento quando o modal for fechado

  hideModal(): void {
    this.close.emit(); // Emitir evento de fechamento do modal
  }
}
