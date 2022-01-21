import { HomeStepperComponent } from './../../components/home-stepper/home-stepper.component'
import { ModalComponent } from './../../components/modal/modal.component'
import { MarketPlaceTabComponent } from './../../components/market-place-tab/market-place-tab.component'
import { PricingTabComponent } from './../../components/pricing-tab/pricing-tab.component'
import { MarketPlaceCardComponent } from './../../components/market-place-card/market-place-card.component'
import { GradientTextComponent } from './../../components/gradient-text/gradient-text.component'
import { ConversionRateComponent } from './../../components/conversion-rate/conversion-rate.component'
import { GradientButtonTextComponent } from './../../components/gradient-button-text/gradient-button-text.component'
import { GradientButtonComponent } from './../../components/gradient-button/gradient-button.component'
import { RouterModule } from '@angular/router'
import { NavbarGlobalComponent } from './../../shared/navbar-global/navbar-global.component'
import { NavbarHomeComponent } from './../../shared/navbar-home/navbar-home.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { HomeSection1Component } from './home-section1/home-section1.component'
import { HomeSection2Component } from './home-section2/home-section2.component'
import { HomeSection3Component } from './home-section3/home-section3.component'
import { HomeSection4Component } from './home-section4/home-section4.component'
import { HomeSection5Component } from './home-section5/home-section5.component'
import { HomeSection6Component } from './home-section6/home-section6.component'
import { HomeSection7Component } from './home-section7/home-section7.component'
import { HomeSection8Component } from './home-section8/home-section8.component'
import { FooterComponent } from './../../shared/footer/footer.component'
import { NgCircleProgressModule } from 'ng-circle-progress'

@NgModule({
	declarations: [
		HomeComponent,
		HomeSection1Component,
		HomeSection2Component,
		HomeSection3Component,
		HomeSection4Component,
		HomeSection5Component,
		HomeSection6Component,
		HomeSection7Component,
		HomeSection8Component,
		FooterComponent,
		NavbarHomeComponent,
		NavbarGlobalComponent,
		GradientButtonComponent,
		GradientButtonTextComponent,
		ConversionRateComponent,
		GradientTextComponent,
		MarketPlaceCardComponent,
		PricingTabComponent,
		MarketPlaceTabComponent,
		ModalComponent,
		HomeStepperComponent,
	],
	imports: [CommonModule, RouterModule, NgCircleProgressModule.forRoot()],
	exports: [
		HomeComponent,
		HomeSection1Component,
		HomeSection2Component,
		HomeSection3Component,
		HomeSection4Component,
		HomeSection5Component,
		HomeSection6Component,
		HomeSection7Component,
		HomeSection8Component,
		FooterComponent,
		NavbarHomeComponent,
		NavbarGlobalComponent,
		GradientButtonComponent,
		GradientButtonTextComponent,
		ConversionRateComponent,
		GradientTextComponent,
		MarketPlaceCardComponent,
		PricingTabComponent,
		MarketPlaceTabComponent,
		ModalComponent,
		HomeStepperComponent,
	],
})
export class HomeModule {}
