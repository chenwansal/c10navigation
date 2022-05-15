import { FooterWindow } from "../../UI/FooterWindow";
import { NavWindow } from "../../UI/NavWindow";
import { SiteWindow } from "../../UI/SiteWindow/SiteWindow";
import { ToolCardWindow } from "../../UI/ToolWindow/ToolCardWindow";

export class AllRepo {

    // Nav Window
    private static navWindow: NavWindow;
    static get NavWindow(): NavWindow { return this.navWindow; }
    static set NavWindow(value: NavWindow) { this.navWindow = value; }

    // Site Window
    private static siteWindow: SiteWindow;
    static get SiteWindow(): SiteWindow { return this.siteWindow; }
    static set SiteWindow(value: SiteWindow) { this.siteWindow = value; }

    // Tool Card Window
    private static toolCardWindow: ToolCardWindow;
    static get ToolCardWindow(): ToolCardWindow { return this.toolCardWindow; }
    static set ToolCardWindow(value: ToolCardWindow) { this.toolCardWindow = value; }

    // Footer Window
    private static footerWindow: FooterWindow;
    static get FooterWindow(): FooterWindow { return this.footerWindow; }
    static set FooterWindow(value: FooterWindow) { this.footerWindow = value; }

    static Ctor(): void {
        this.navWindow = new NavWindow();
        this.siteWindow = new SiteWindow();
        this.toolCardWindow = new ToolCardWindow();
        this.footerWindow = new FooterWindow();
    }

}