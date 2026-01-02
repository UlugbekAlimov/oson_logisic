import { NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../../shared/i18n/i18n.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgIf],
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  readonly i18n = inject(I18nService);
  readonly expanded = signal([false, false, false]);

  toggleExpand(index: number): void {
    const next = [...this.expanded()];
    next[index] = !next[index];
    this.expanded.set(next);
  }
}
