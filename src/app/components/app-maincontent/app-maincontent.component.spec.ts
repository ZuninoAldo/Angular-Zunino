import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMaincontentComponent } from './app-maincontent.component';

describe('AppMaincontentComponent', () => {
  let component: AppMaincontentComponent;
  let fixture: ComponentFixture<AppMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMaincontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
