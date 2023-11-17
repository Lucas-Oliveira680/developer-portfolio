import { EmbeddedViewRef, Injectable, Injector, ViewContainerRef } from '@angular/core'
import { ToastComponent } from 'src/app/shared/components/toast/toast.component'

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private viewContainerRef!: ViewContainerRef

  constructor(private injector: Injector) {}

  setViewContainerRef(ref: ViewContainerRef) {
    this.viewContainerRef = ref
  }

  show(message: string, type: string) {
    const toast = { message, type }
    this.appendToastComponentToBody(toast)
  }

  private appendToastComponentToBody(toast: { message: string; type: string }) {
    const componentRef = this.viewContainerRef.createComponent(ToastComponent, { injector: this.injector })
    componentRef.instance.toast = toast
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
    document.body.appendChild(domElem)
    requestAnimationFrame(() => {
      domElem.classList.add('show')
      setTimeout(() => {
        domElem.classList.remove('show')
        setTimeout(() => componentRef.destroy(), 300)
      }, 3000)
    })
  }
}
