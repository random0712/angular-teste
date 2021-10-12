import { Component } from "@angular/core";

@Component({
    selector: "conteudo-foda",
    templateUrl: "content.component.html",
    styleUrls: ["content.component.scss"]
})
export class ContentFodaComponent {
    cards: string[] = [
        "Carta 1",
        "Carta 2",
        "Carta 3",
        "Carta 4",
        "Carta 5",
    ]
}