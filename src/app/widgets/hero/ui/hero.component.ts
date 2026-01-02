import { Component, inject } from '@angular/core';
import { I18nService } from '../../../shared/i18n/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  readonly i18n = inject(I18nService);
}
