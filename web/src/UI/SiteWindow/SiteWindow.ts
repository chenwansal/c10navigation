import Global from "../../Global/Global";
import { CommonUI } from "../Common/CommonUI";
import { SiteGroupElement } from "./SiteGroupElement";

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

        // Create Section
        let section = CommonUI.CreateSectionTitle("网站列表", Global.APP);

        // Create Root
        let root = document.createElement("div");
        root.id = this.name;
        root.className += this.name;
        Global.APP.appendChild(root);
        this.root = root;

        // Create Site Groups
        let videoGroup = this.CreateSiteGroup("视频网站");
        videoGroup.AddSiteItem("https://v.qq.com", "腾讯视频");
        videoGroup.AddSiteItem("https://www.bilibili.com/", "哔哩哔哩");
        videoGroup.AddSiteItem("https://www.iqiyi.com/", "爱奇艺");
        videoGroup.AddSiteItem("https://www.youku.com/", "优酷");
        videoGroup.AddSiteItem("https://www.acfun.cn/", "AcFun");

        let liveGroup = this.CreateSiteGroup("直播网站");
        liveGroup.AddSiteItem("https://www.douyu.com/", "斗鱼");
        liveGroup.AddSiteItem("https://www.huya.com/", "虎牙");

        return this;

    }

    private CreateSiteGroup(title: string): SiteGroupElement {

        let siteGroup = new SiteGroupElement();
        siteGroup.Render(this.root, title);

        return siteGroup;

    }

}