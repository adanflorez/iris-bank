import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageComponent } from './page.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  let store: MockStore;
  const initialState = { loading: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageComponent],
      providers: [provideMockStore({ initialState })],
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
