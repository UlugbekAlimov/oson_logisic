import { Component, inject } from '@angular/core';
import { I18nService } from '../../../shared/i18n/i18n.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.component.html'
})
export class LoadingComponent {
  readonly i18n = inject(I18nService);
}
