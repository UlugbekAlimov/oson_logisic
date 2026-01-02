import { Component, inject } from '@angular/core';
import { I18nService } from '../../../shared/i18n/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly i18n = inject(I18nService);
}
