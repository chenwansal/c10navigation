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
        logo.className += "title1";
        logo.innerHTML = `<a href=${url}>C10 导航</a>`;

        return logo;

    }

    private AddNavItem(url: string, text: string): HTMLDivElement {

        let item: HTMLDivElement = document.createElement("div");
        item.className += "title4";
        item.innerHTML = `<a href=${url}>${text}</a>`;

        return item;

    }
}