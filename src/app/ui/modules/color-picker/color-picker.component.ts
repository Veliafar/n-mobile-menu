import { Color } from '@shared/models/color.model';
import { Component, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'color-picker',
    templateUrl: 'color-picker.component.html',
    styleUrls: ['color-picker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ColorPickerComponent),
            multi: true
        }
    ]
})
export class ColorPickerComponent implements ControlValueAccessor {

    @Input() colors: Color[] = [];
    @Input()
    set value(value: string) {
        this.selectedValue = value;
    }

    @Input() disabledOptions: string[] = [];

    @Input()
    set name(name: string) {
        if (name) {
            this._radioName = name;
        } else {
            this._radioName = 'radio' + Math.floor(Math.random() * 100);
        }
    }
    get name(): string {
        return this._radioName;
    }

    @Output() toggle: EventEmitter<string> = new EventEmitter<string>();

    selectedValue: string = '';

    private _radioName: string = '';

    onClick(value): void {
        this.selectedValue = value;
        this.toggle.emit(value);
        this._propagateChange(value);
    }

    disabled(option: Color): boolean {
        return this.disabledOptions?.includes(option.color);
    }

    private _propagateChange: Function = (_: any) => { };
    private _propagateTouched: Function = () => { };

    /* =================================
          Control Value Accessor
    ================================= */

    writeValue(value: string): void {
        this.selectedValue = value;
    }

    registerOnChange(fn: any): void {
        this._propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._propagateTouched = fn;
    }
}
