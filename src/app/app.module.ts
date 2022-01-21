import { WhoWeServeModule } from './modules/who-we-serve/who-we-serve.module'
import { TermsAndConditionsModule } from './modules/terms-and-conditions/terms-and-conditions.module'
import { PricingModule } from './modules/pricing/pricing.module'
import { MarketPlaceModule } from './modules/market-place/market-place.module'
import { FeaturesModule } from './modules/features/features.module'
import { HomeModule } from './modules/home/home.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarGlobalComponent } from './shared/navbar-global/navbar-global.component'
import { PrivacyAndPolicyModule } from './modules/privacy-and-policy/privacy-and-policy.module';
import { GradientButtonComponent } from './components/gradient-button/gradient-button.component';
import { GradientButtonTextComponent } from './components/gradient-button-text/gradient-button-text.component';
import { ConversionRateComponent } from './components/conversion-rate/conversion-rate.component';
import { GradientTextComponent } from './components/gradient-text/gradient-text.component';
import { MarketPlaceCardComponent } from './components/market-place-card/market-place-card.component';
import { PricingTabComponent } from './components/pricing-tab/pricing-tab.component';
import { MarketPlaceTabComponent } from './components/market-place-tab/market-place-tab.component';
import { ModalComponent } from './components/modal/modal.component'

@NgModule({
	declarations: [AppComponent, NavbarGlobalComponent, GradientButtonComponent, GradientButtonTextComponent, ConversionRateComponent, GradientTextComponent, MarketPlaceCardComponent, PricingTabComponent, MarketPlaceTabComponent, ModalComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HomeModule,
		FeaturesModule,
		MarketPlaceModule,
		PricingModule,
		PrivacyAndPolicyModule,
		TermsAndConditionsModule,
		WhoWeServeModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
