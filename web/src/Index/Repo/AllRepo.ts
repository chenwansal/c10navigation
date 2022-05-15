import { FooterWindow } from "../../UI/FooterWindow";
import { NavWindow } from "../../UI/NavWindow";
import { SiteWindow } from "../../UI/SiteWindow/SiteWindow";

export class AllRepo {

    // Nav Window
    private static navWindow: NavWindow;
    static get NavWindow(): NavWindow { return this.navWindow; }
    static set NavWindow(value: NavWindow) { this.navWindow = value; }

    // Site Window
    private static siteWindow: SiteWindow;
    static get SiteWindow(): SiteWindow { return this.siteWindow; }
    static set SiteWindow(value: SiteWindow) { this.siteWindow = value; }

    // Footer Window
    private static footerWindow: FooterWindow;
    static get FooterWindow(): FooterWindow { return this.footerWindow; }
    static set FooterWindow(value: FooterWindow) { this.footerWindow = value; }

    static Ctor(): void {
        this.navWindow = new NavWindow();
        this.siteWindow = new SiteWindow();
        this.footerWindow = new FooterWindow();
    }

}