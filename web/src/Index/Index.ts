import Global from "../Global/Global";
import { IndexOpenController } from "./Controllers/IndexOpenController";
import { AllRepo } from "./Repo/AllRepo";

function Main() {

    Global.APP = document.getElementById("app");

    // ==== CTOR ====
    // Repo
    AllRepo.Ctor();

    // Controller
    let indexOpenController: IndexOpenController = new IndexOpenController();

    // ==== INIT ====
    indexOpenController.Init();

    // ==== TICK ====
    let tickInterval = setInterval(() => {

    }, 2000);

    // ==== ON TEAR DOWN ====
    window.addEventListener("close", ()=> {
        clearInterval(tickInterval);
    });

    window.addEventListener("abort", () => {
        clearInterval(tickInterval);
    });

    console.log("Open Index");

}

Main();
