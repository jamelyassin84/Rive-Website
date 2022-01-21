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
import { PrivacyAndPolicyModule } from './modules/privacy-and-policy/privacy-and-policy.module'
import { SidebarComponent } from './shared/sidebar/sidebar.component'
import { NgCircleProgressModule } from 'ng-circle-progress'

@NgModule({
	declarations: [AppComponent, SidebarComponent],
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
