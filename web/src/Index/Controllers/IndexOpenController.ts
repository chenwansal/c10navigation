import { AllRepo } from "../Repo/AllRepo";

export class IndexOpenController {

    constructor() {}

    Init(): void {

        let nav = AllRepo.NavWindow.Render();
        let site = AllRepo.SiteWindow.Render();

    }

}