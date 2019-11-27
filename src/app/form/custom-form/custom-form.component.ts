import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateCounterRange } from '../components/counts/utils';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {
  public customForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      age: [11, validateCounterRange],
      height: 10
    });
  }

  public submitForm(): void {
    console.log(this.customForm.value);
  }
}
