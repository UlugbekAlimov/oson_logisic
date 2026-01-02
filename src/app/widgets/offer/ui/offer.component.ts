import { Component, inject } from '@angular/core';
import { I18nService } from '../../../shared/i18n/i18n.service';

@Component({
  selector: 'app-offer',
  standalone: true,
  templateUrl: './offer.component.html'
})
export class OfferComponent {
  readonly i18n = inject(I18nService);
}
