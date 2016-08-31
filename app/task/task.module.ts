import {CommonModule} from '../common/common.module';
import {TaskStatusOperateComponent} from './taskStatusOperate.component';
import {TaskComponent} from './task.component';
import {routing} from './task.routing';
import {TaskService} from './task.service';
import {TaskStatusTextPipe} from './task.status.pipe';
import {TaskStartComponent} from './taskStart.component';
import {TaskListComponent} from './taskList.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule,routing],
    exports: [TaskComponent],
    declarations: [TaskComponent, TaskListComponent,TaskStartComponent,TaskStatusOperateComponent, TaskStatusTextPipe],
    providers: [TaskService],
})
export class TaskModule { }
