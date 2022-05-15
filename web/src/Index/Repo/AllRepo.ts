import { NavWindow } from "../../UI/NavWindow";
import { SiteWindow } from "../../UI/SiteWindow";

export class AllRepo {

    // Nav Window
    private static navWindow: NavWindow;
    static get NavWindow(): NavWindow { return this.navWindow; }
    static set NavWindow(value: NavWindow) { this.navWindow = value; }

    // Site Window
    private static siteWindow: SiteWindow;
    static get SiteWindow(): SiteWindow { return this.siteWindow; }
    static set SiteWindow(value: SiteWindow) { this.siteWindow = value; }

    static Ctor(): void {
        this.navWindow = new NavWindow();
    }

}