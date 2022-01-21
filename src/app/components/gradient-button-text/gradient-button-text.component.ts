import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-gradient-button-text',
	templateUrl: './gradient-button-text.component.html',
	styleUrls: ['./gradient-button-text.component.scss'],
})
export class GradientButtonTextComponent implements OnInit {
	constructor() {}
	@Input() text!: string

	ngOnInit(): void {}
}
