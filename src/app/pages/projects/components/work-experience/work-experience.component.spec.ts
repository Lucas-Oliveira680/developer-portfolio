import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WorkExperienceComponent } from 'src/app/pages/projects/components/work-experience/work-experience.component'

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent
  let fixture: ComponentFixture<WorkExperienceComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WorkExperienceComponent],
    })
    fixture = TestBed.createComponent(WorkExperienceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
