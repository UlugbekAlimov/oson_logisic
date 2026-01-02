import { Component, inject } from '@angular/core';
import { I18nService } from '../../../shared/i18n/i18n.service';

@Component({
  selector: 'app-advantages',
  standalone: true,
  templateUrl: './advantages.component.html'
})
export class AdvantagesComponent {
  readonly i18n = inject(I18nService);
}
