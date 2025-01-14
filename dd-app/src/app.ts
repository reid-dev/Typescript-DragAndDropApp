class ProjectInput {

    templateELement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    constructor() {
        this.templateELement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateELement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.attach();
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const projInput = new ProjectInput();