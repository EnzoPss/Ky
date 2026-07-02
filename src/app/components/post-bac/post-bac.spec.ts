import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBac } from './post-bac';

describe('PostBac', () => {
  let component: PostBac;
  let fixture: ComponentFixture<PostBac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostBac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostBac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
