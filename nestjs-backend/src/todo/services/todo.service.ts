import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoItem } from '../todo.interface';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

async  findAll(): Promise<TodoItem[]> {
    return await this.todoRepository.find();
  }

 async saveAll(todoItems: TodoItem[]): Promise<TodoItem[]> {
    return await this.todoRepository.save(todoItems);
  }

async  save(todoItem: TodoItem): Promise<TodoItem> {
    return await this.todoRepository.save(todoItem);


    

  }

 async update(todoItem: TodoItem): Promise<TodoItem> {
   await this.todoRepository.update(todoItem.id, todoItem);
    return await this.todoRepository.findOne({
      where: {
        id: todoItem.id,
      },
    });
  }
}
