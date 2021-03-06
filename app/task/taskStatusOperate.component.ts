import {TaskService} from './task.service';
import {Component, OnInit,forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR,ControlValueAccessor} from '@angular/forms';
const noop = () => {
};
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TaskStatusOperateComponent),
    multi: true
};
@Component({
    moduleId: module.id,
    selector: 'agl-task-list-status-operate',
    styleUrls:['./taskStatusOperate.component.css'],
    templateUrl:'./taskStatusOperate.component.html',
    providers:[CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
}) 
export class TaskStatusOperateComponent implements ControlValueAccessor {
    private _value: any = '';
    private _statusList;
    constructor() {
        this._statusList = TaskService.TaskStatuses;
    }
    private trasferStatusCss(status) {
        return {
            '1': 'text-default glyphicon-info-sign',
            '2': 'text-danger glyphicon-exclamation-sign',
            '3': 'text-success glyphicon-ok-sign'
        }[status]
    }
    private selectStatus(status) {
         this.value = status; 
    }

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    get value(): any {
        return this._value;
    }
    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChangeCallback(v);
        }
    }
    
    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this._value) {
            this._value = value;
        }
    }
    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}
