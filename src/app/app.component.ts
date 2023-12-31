import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { ThemeService } from 'src/app/shared/services/theme.service'
import { LanguageService } from 'src/app/shared/services/language.service'
import { EBreakpoints } from 'src/app/shared/types/breakpoints.enum'
import { Router } from '@angular/router'
import { ToastService } from 'src/app/shared/services/toast.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  isMobile = window.innerWidth <= EBreakpoints.MD
  @ViewChild('toastContainer', { read: ViewContainerRef }) toastContainer!: ViewContainerRef
  isAtTop = this.elementRef.nativeElement.scrollTop === 0
  showScrollButton: boolean = false
  private mobileNavbar!: HTMLElement

  constructor(
    private _languageService: LanguageService,
    private _router: Router,
    private _themeService: ThemeService,
    private _toastService: ToastService,
    private elementRef: ElementRef
  ) {}

  get isAtContactRoute(): boolean {
    return this._router.url === '/contact'
  }

  get currentTheme() {
    return this._themeService.currentTheme()
  }

  ngOnInit() {
    const themeInLocalStorage = this._themeService.getTheme()
    const browserLanguage = navigator.language
    const languageInLocalStorage = this._languageService.getLanguage()
    this.mobileNavbar = this.elementRef.nativeElement.querySelector('#mobileNavbar')

    if (themeInLocalStorage) {
      this._themeService.updateTheme(themeInLocalStorage)
    } else {
      this._themeService.updateTheme('dark')
    }

    if (languageInLocalStorage) {
      this._languageService.setLanguage(languageInLocalStorage)
    } else {
      if (browserLanguage === 'pt-BR') {
        this._languageService.setLanguage('pt-br')
      } else {
        this._languageService.setLanguage('en')
      }
    }
  }

  ngAfterViewInit() {
    this._toastService.setViewContainerRef(this.toastContainer)
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= EBreakpoints.MD
  }

  @HostListener('window:scroll', ['$event'])
  onWindowsScroll(event: Event) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop <= 50) {
      this.isAtTop = true
    } else {
      this.isAtTop = false
    }

    this.showScrollButton = window.scrollY > window.innerHeight / 2
  }

  toggleTheme() {
    this._themeService.toggleTheme()
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
