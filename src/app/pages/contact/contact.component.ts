import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import emailjs from 'emailjs-com'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { ThemeService } from 'src/app/shared/services/theme.service'
import { environment } from 'environments/environment'
import { ToastService } from 'src/app/shared/services/toast.service'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../../styles/_forms.scss'],
})
export class ContactComponent implements OnInit {
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
    private _toast: ToastService
  ) {}

  get currentTheme() {
    return this._themeService.currentTheme()
  }

  ngOnInit() {
    emailjs.init(environment.EMAILJS_USER_ID)
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

    emailjs
      .send(environment.EMAILJS_SERVICE_ID, environment.EMAILJS_TEMPLATE_ID, emailData)
      .then(
        result => {
          this.contactForm.reset()
          this._translate.get('PAGES.CONTACT.FORM.NOTIFICATIONS.SUCCESS').subscribe((res: string) => {
            this._toast.show(res, 'success')
          })
        },
        error => {
          this._translate.get('PAGES.CONTACT.FORM.NOTIFICATIONS.ERROR').subscribe((res: string) => {
            this._toast.show(res, 'error')
          })
        }
      )
      .finally(() => {
        this.isEmailjsResponding = false
      })
  }
}
