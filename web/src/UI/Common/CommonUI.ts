export namespace CommonUI {

    export function CreateSectionTitle(title: string, parent: HTMLElement): HTMLDivElement {
        
        let section = document.createElement("div");
        section.className = "section-title";
        parent.appendChild(section);

        let label = document.createElement("i");
        label.innerText = title;
        section.appendChild(label);

        return section;

    }

}