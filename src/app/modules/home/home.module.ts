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
	],
	imports: [CommonModule],
})
export class HomeModule {}
