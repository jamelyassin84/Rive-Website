import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-conversion-rate',
	templateUrl: './conversion-rate.component.html',
	styleUrls: ['./conversion-rate.component.scss'],
})
export class ConversionRateComponent implements OnInit {
	constructor() {}
	@Input() rate!: number

	ngOnInit(): void {}
}
