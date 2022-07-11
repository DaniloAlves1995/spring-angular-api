import { User } from './../../model/user';
import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  code: string;
  form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]);

  displayedColumns = ['name', 'gender', 'birth', 'country', 'phone', 'email'];

  users$: User[];

  constructor(private formBuilder: FormBuilder) {
    //init form property as a form field group
    this.form = this.formBuilder.group({
      name: [null],
      gender: [null],
      birth: [null],
      country: [null],
      phone: this.phone,
      email: this.email
    });

    this.code = "+COD";
    this.users$ = [
      { id: 1, name: 'Danilo Alves', gender: 'male', birth: '27/05/1995', country: 'Brazil', phone: '+5588996735281', email: 'danilo@ufc.br'}
    ];

   }

  ngOnInit(): void {
  }

  getErrorMessage(field: FormControl, type: string) {
    /*

    */
    if (field.hasError('required')) {
      return type == 'phone' ? 'You must enter a phone number' : 'You must enter a email';
    }

    if (type == 'phone')
      return field.hasError('pattern') ? 'Just numbers' : '';
    else
      return field.hasError('email') ? 'Not a valid email' : '';
  }


  onCountrySelected(country: Country) {
    /*
     Event of a select country.
     Get the calling code and send to country code field.
    */
    this.code = country.callingCode;
  }

  onClear(){
    /*
     Clear form field.
    */
    this.form.controls['name'].setValue('');
    this.form.controls['birth'].setValue('');
    this.form.controls['gender'].setValue('');
    this.form.controls['phone'].setValue('');
    this.form.controls['email'].setValue('');
  }

  onSubmit(){
    /*
     Call the service and send data.
    */

  }

}
