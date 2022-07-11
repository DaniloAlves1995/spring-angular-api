
import { User } from './../../model/user';
import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  //properties to control forms
  code: string;
  form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.pattern("^[0-9]+$")]);

  //name of columns to show on the front
  displayedColumns = ['name', 'gender', 'birth', 'country', 'phone', 'email'];

  //observable to received the users list from services
  users$: Observable<User[]>;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
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
    this.users$ = this.usersService.list()
    .pipe(
      catchError(error => {
        this.onError('Error to load users.');
        return of([])
      })
    );

   }

  ngOnInit(): void {
  }

  getErrorMessage(field: FormControl, type: string) {
    /*
      Controls the error messages that are displayed for phone and email fields.
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
     Call the service and send data to API.
    */
   console.log(this.form.value);
    if (!this.form.valid) {
      this._snackBar.open('Please enter all required fields.', '', {duration: 5000});
      this.validateAllFormFields(this.form);
    } else {
      let data = this.form.value
      data['birth'] = data['birth'].toLocaleDateString("en-US");
      data['phone'] = data['country'] ? data['country'].callingCode : '' + data['phone'];
      data['country'] = data['country'] ? data['country'].name : '';

      this.usersService.save(data).subscribe({
        next: () => this.onSuccess(),
        error: () => this.onFeilure()
      });
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  private onSuccess() {
    /*
     Show success message with snack bar
    */
    this._snackBar.open('User saved with success!', '', {duration: 5000});
  }

  private onFeilure() {
    /*
     Show error message with snack bar
    */
    this._snackBar.open('Error to save user.', '', {duration: 5000});
  }

  onError(errorMsg: string) {
    /*
     Show error message as dialog box
    */
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
  });
}

}
