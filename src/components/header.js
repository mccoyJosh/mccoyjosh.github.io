class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <style>
        nav {
          height: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        #menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        #menu li {
            display: inline-block;
        }
       
        
        h1 {
          margin-right: 75px;
          font-size: 40px;
          background: linear-gradient(to left, #f1f1f1, #fafafa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        
        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
        }
        
        
        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }
        
      </style>
      <header>
        <nav>
          <ul id="menu">
            <li>
                <a href="../">
                    <h1>mcjosh</h1>
                </a>
                <p id="basic-text">
                    a josh mccoy website
                </p>
            </li>
            <li>
              <a href="../about/">About</a>
            </li>
          </ul>
        </nav>
        <div id="center-screen">
            <hr width="75%" size=3; color="white"/>
        <div/>
      </header>
    `;
    }



}

customElements.define('header-item', Header)