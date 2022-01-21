import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-gradient-button',
	templateUrl: './gradient-button.component.html',
	styleUrls: ['./gradient-button.component.scss'],
})
export class GradientButtonComponent implements OnInit {
	constructor() {}
	@Input() text!: string
	ngOnInit(): void {}
}
