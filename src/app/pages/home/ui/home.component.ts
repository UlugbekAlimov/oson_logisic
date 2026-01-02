import { Component } from '@angular/core';
import { AboutComponent } from '../../../widgets/about/ui/about.component';
import { AdvantagesComponent } from '../../../widgets/advantages/ui/advantages.component';
import { ContactComponent } from '../../../widgets/contact/ui/contact.component';
import { FooterComponent } from '../../../widgets/footer/ui/footer.component';
import { HeaderComponent } from '../../../widgets/header/ui/header.component';
import { HeroComponent } from '../../../widgets/hero/ui/hero.component';
import { OfferComponent } from '../../../widgets/offer/ui/offer.component';
import { ServicesComponent } from '../../../widgets/services/ui/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    AdvantagesComponent,
    OfferComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
