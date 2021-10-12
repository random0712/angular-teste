import { Component, Input } from "@angular/core";

@Component({
    selector: "content-card",
    templateUrl: "card.component.html",
    styleUrls: ["card.component.scss"]
})
export class ContentCardComponent {
    @Input() text: string = "Texto Default";

}