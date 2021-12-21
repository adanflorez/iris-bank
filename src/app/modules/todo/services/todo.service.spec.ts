import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import ToDo from 'src/app/core/models/todo.interface';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpClientSpy: {
    post: jasmine.Spy;
    get: jasmine.Spy;
    delete: jasmine.Spy;
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'post',
      'get',
      'delete',
    ]);
    service = new TodoService(httpClientSpy as any);
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });

  it('Get todo list from fake db', (done: DoneFn) => {
    const item: ToDo = {
      id: '1',
      text: 'Prueba',
      checked: false,
    };

    const result = [item];
    httpClientSpy.get.and.returnValue(of(result));

    service.getDataAPI().subscribe({
      next: (res) => {
        expect(res).toEqual(result);
        done();
      },
    });
  });

  it('Add item to fake db', (done: DoneFn) => {
    const item: ToDo = {
      id: '1',
      text: 'Prueba',
      checked: false,
    };

    httpClientSpy.post.and.returnValue(of(item));

    service.addItem(item).subscribe({
      next: (res) => {
        expect(res).toEqual(item);
        done();
      },
    });
  });

  it('Remove item from fake db', (done: DoneFn) => {
    httpClientSpy.delete.and.returnValue(of({}));

    service.removeItem("1").subscribe({
      next: (res) => {
        expect(res).toEqual({});
        done();
      },
    });
  });
});
