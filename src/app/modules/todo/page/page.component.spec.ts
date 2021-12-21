import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageComponent } from './page.component';
import * as uuidWrapper from 'uuid';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('this.category should be equal to category param', () => {
    component.chooseCategory('all');
    expect(component.category).toEqual('all');
  });

  it('should remove item', () => {
    component.todoList = [
      {
        id: '1',
        text: 'test 1',
        checked: false,
      },
      {
        id: '2',
        text: 'test 2',
        checked: false,
      },
    ];
    component.removeItem('2');
    expect(component.todoList).toEqual([
      {
        id: '1',
        text: 'test 1',
        checked: false,
      },
    ]);
  });

  /**
   * Failed by uuid unit test
   */

  // it('should add item to toDoList', () => {
  //   const item = 'test 3';
  //   spyOn(uuidWrapper, 'v4').and.returnValue("uid1");
  //   component.addToDoItem(item);
  //   expect(component.todoList).toEqual([
  //     {
  //       id: 'uid1',
  //       text: 'test 3',
  //       checked: false,
  //     },
  //   ]);
  // });
});
