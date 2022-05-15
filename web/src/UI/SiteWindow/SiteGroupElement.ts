export class SiteGroupElement {

    root: HTMLDivElement;

    constructor() {}

    Render(parent: HTMLElement, title: string): SiteGroupElement {

        let root = document.createElement("div");
        root.className += "site-group";
        parent.appendChild(root);
        this.root = root;

        let label = document.createElement("label");
        label.innerText = title;
        label.className += "title5";
        root.appendChild(label);

        return this;

    }

    AddSiteItem(url: string, text: string): HTMLAnchorElement {
        let a = document.createElement("a");
        a.href = url;
        a.innerText = text;
        a.target = "_blank";
        this.root.appendChild(a);
        return a;
    }

}