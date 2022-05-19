import Global from "../Global/Global";

export class FooterWindow {

    name: string;
    private root: HTMLDivElement;

    constructor() {
        this.name = "footer-window";
    }

    Render() {

        // Create Root
        let root = document.createElement("div");
        root.id = this.name;
        root.className += this.name;
        Global.APP.appendChild(root);
        this.root = root;

        // Create Beian
        let beian = this.CreateInfo();
        root.appendChild(beian);

        // Create Author
        let author = this.CreateAuthor();
        root.appendChild(author);

    }

    private CreateInfo(): HTMLParagraphElement {

        let info = document.createElement("div");

        // 备案信息
        let beian = document.createElement("a");
        beian.innerText = "闽ICP备2022007026号-1";
        beian.target = "_blank";
        beian.href = "https://beian.miit.gov.cn";
        info.appendChild(beian);

        return info;

    }

    private CreateAuthor(): HTMLParagraphElement {

        let info = document.createElement("div");

        // 作者信息
        let author = document.createElement("i");
        author.innerText = "作者: 杰克有茶";
        info.appendChild(author);
        info.innerHTML += "&nbsp; / &nbsp;";

        // 邮箱
        let mail = document.createElement("a");
        mail.innerText = "邮箱: chenwansal1@163.com";
        mail.target = "_blank";
        mail.href = "mailto: chenwansal1@163.com";
        info.appendChild(mail);
        info.innerHTML += "&nbsp; / &nbsp;";

        // 即刻
        let jike = document.createElement("a");
        jike.innerText = "即刻主页: @杰克有茶";
        jike.target = "_blank";
        jike.href = "https://web.okjike.com/u/C027E21D-DFD6-4F88-AF40-31871E1FB6F4";
        info.appendChild(jike);

        return info;

    }

}