class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <style>
        footer {
          height: 30px;
          padding: 0 10px;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #000000;
        }
        
        ul li {
          list-style: none;
          display: inline;
        }
        
        a {
          margin: 0 15px;
          color: inherit;
          text-decoration: none;
        }
        
        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #333;
        }
        
        .social-row {
          font-size: 20px;
        }
        
        .social-row li a {
          margin: 0 15px;
        }
      </style>
      <footer>
        <ul>
          <li><a href="">1</a></li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
        </ul>
      </footer>
    `;
    }
}

customElements.define('footer-item', Footer);
