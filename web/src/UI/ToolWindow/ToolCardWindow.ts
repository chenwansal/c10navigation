import { CommonUI } from "../Common/CommonUI";

export class ToolCardWindow {

    name: string;

    private root: HTMLDivElement;

    constructor() {
        this.name = "tool-card-window";
    }

    Render() {

        // Create Section
        let section = CommonUI.CreateSectionTitle("工具集", global.APP);

        // Create Root
        let root = document.createElement("div");
        root.id = this.name;
        root.className += this.name;
        section.appendChild(root);
        this.root = root;
        
    }
    
}