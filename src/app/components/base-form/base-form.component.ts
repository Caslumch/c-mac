import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChildren,
} from '@angular/core';
import { Observable, fromEvent, merge } from 'rxjs';
import { FormArray, FormControlName, FormGroup, UntypedFormGroup } from '@angular/forms';

@Component({
  template: '',
})
export abstract class BaseForm implements AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];

  form!: UntypedFormGroup;
  displayMessage: any = {};
  constructor() {}

  ngAfterViewInit(): void {


    
  }

  clearMessage = () => {
    this.displayMessage = {};
  };
}
