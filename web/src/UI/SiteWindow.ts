/** 站点列表
 *      视频网站
 *      直播网站
 */
export class SiteWindow {
    
    name: string;
    private root: HTMLDivElement;

    constructor() {
        this.name = "site-window";
    }

    Render(): SiteWindow {

        let root = document.createElement("div");
        root.id = this.name;
        global.APP.appendChild(root);
        this.root = root;

        return this;

    }

}