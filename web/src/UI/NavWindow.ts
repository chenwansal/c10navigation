/** 导航栏
 *      Logo
 */
export class NavWindow {

    name: string;
    private root: HTMLDivElement;

    private logo: HTMLDivElement;

    constructor() {
        this.name = "nav-window";
    }

    Render(): NavWindow {

        // Create Root
        let root = document.createElement("div")
        root.id = this.name;
        global.APP.appendChild(root);
        this.root = root;

        // Create Logo
        let logo = this.CreateLogo("/");
        root.appendChild(logo);
        this.logo = logo;

        // Add Items
        let mainPageItem = this.AddNavItem("/", "主页");
        root.appendChild(mainPageItem);

        // Append Root to APP

        return this;

    }

    private CreateLogo(url: string): HTMLDivElement {

        let logo: HTMLDivElement = document.createElement("div");
        logo.id = "logo";
        logo.className += "title3";
        logo.innerHTML = `<a href=${url}>C10 导航</a>`;
        logo.title = "收录C10爱逛的网站和一些工具";

        return logo;

    }

    private AddNavItem(url: string, text: string): HTMLDivElement {

        let item: HTMLDivElement = document.createElement("div");
        item.innerHTML = `<a target='_blank' href=${url}>${text}</a>`;

        return item;

    }
}