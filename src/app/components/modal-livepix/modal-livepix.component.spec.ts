import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLivepixComponent } from './modal-livepix.component';

describe('ModalLivepixComponent', () => {
  let component: ModalLivepixComponent;
  let fixture: ComponentFixture<ModalLivepixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLivepixComponent]
    });
    fixture = TestBed.createComponent(ModalLivepixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
