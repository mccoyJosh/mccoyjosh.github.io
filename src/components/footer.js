class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <style>
        #footer-item {
            width: 100%;
            color: #000309;
            text-decoration: none;
            font-size: 10px;
        }
      
        footer {
          height: 20px;
          padding: 0 10px;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #ffffff;
        }
        
        ul li {
          list-style: none;
          display: inline;
        }
        
        #footer-item a {
          margin: 0 15px;
          color: inherit;
          text-decoration: none;
          font-size: 10px;
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
      <footer id= "footer-item">
        <ul>
           <li>
               
           </li>
           <li>
              <a href="../l/">Professional Links</a>
           </li>
        </ul>
      </footer>
    `;
    }
}

customElements.define('footer-item', Footer);
