import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiferProfileComponent } from './modifer-profile.component';

describe('ModiferProfileComponent', () => {
  let component: ModiferProfileComponent;
  let fixture: ComponentFixture<ModiferProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModiferProfileComponent]
    });
    fixture = TestBed.createComponent(ModiferProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
