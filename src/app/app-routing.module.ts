import { WhoWeServeComponent } from './modules/who-we-serve/who-we-serve/who-we-serve.component'
import { TermsAndConditionsComponent } from './modules/terms-and-conditions/terms-and-conditions/terms-and-conditions.component'
import { PrivacyAndPolicyComponent } from './modules/privacy-and-policy/privacy-and-policy/privacy-and-policy.component'
import { PricingComponent } from './modules/pricing/pricing/pricing.component'
import { FeaturesComponent } from './modules/features/features/features.component'
import { HomeComponent } from './modules/home/home/home.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home',
	},
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'features',
		component: FeaturesComponent,
	},
	{
		path: 'pricing',
		component: PricingComponent,
	},
	{
		path: 'privacy-and-policy',
		component: PrivacyAndPolicyComponent,
	},
	{
		path: 'terms-and-conditions',
		component: TermsAndConditionsComponent,
	},
	{
		path: 'who-we-serve',
		component: WhoWeServeComponent,
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
