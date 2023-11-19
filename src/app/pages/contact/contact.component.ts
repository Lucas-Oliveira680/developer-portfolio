import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { ThemeService } from 'src/app/shared/services/theme.service'
import { ToastService } from 'src/app/shared/services/toast.service'
import { ContactService } from 'src/app/pages/contact/services/contact.service'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../../styles/_forms.scss'],
})
export class ContactComponent {
  isEmailjsResponding = false
  formFieldsTranslations = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  contactForm: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.maxLength(64), Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    message: ['', [Validators.required, Validators.minLength(3)]],
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _themeService: ThemeService,
    private _translate: TranslateService,
    private _toast: ToastService,
    private _contactService: ContactService
  ) {}

  get currentTheme() {
    return this._themeService.currentTheme()
  }

  onSubmit() {
    if (this.contactForm.invalid) return

    this.isEmailjsResponding = true

    const formValues = this.contactForm.value
    const emailData = {
      name: formValues.name,
      email: formValues.email,
      subject: formValues.subject,
      message: formValues.message,
    }

    this._contactService.sendEmail(formValues).subscribe({
      next: () => {
        this._translate.get('PAGES.CONTACT.FORM.NOTIFICATIONS.SUCCESS').subscribe((res: string) => {
          this._toast.show(res, 'success')
        })
      },
      error: () => {
        this._translate.get('PAGES.CONTACT.FORM.NOTIFICATIONS.ERROR').subscribe((res: string) => {
          this._toast.show(res, 'error')
        })
      },
      complete: () => {
        this.isEmailjsResponding = false
      },
    })
  }
}
