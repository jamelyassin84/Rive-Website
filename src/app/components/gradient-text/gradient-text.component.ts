import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-gradient-text',
	templateUrl: './gradient-text.component.html',
	styleUrls: ['./gradient-text.component.scss'],
})
export class GradientTextComponent implements OnInit {
	constructor() {}
	@Input() text!: string

	ngOnInit(): void {}
}
