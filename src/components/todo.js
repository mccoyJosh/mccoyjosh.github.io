class TodoItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let num = Math.floor(Math.random() * 100);
        let image_file = `dog.png`
        if (num  > 70) {
            image_file = `seal.png`
        } else if (num > 40) {
            image_file = `cat.png`
        }

        this.innerHTML = `
      <style>
        #todo-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
      </style>
      
      <div id= "todo-item">
            <p>
                <img src="./assets/under_construction.gif" alt="UNDER CONSTRUCTION">
            </p>
            <p>
                <img src="./assets/` + image_file +  `" alt="creature">
            </p>
      </div>
    `;
    }
}

customElements.define('todo-item', TodoItem);
