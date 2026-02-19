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
        
        #header_main_menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        #header_main_menu li {
            display: inline-block;
        }
       
        
        #header_main_menu h1 {
          margin-right: 75px;
          font-size: 40px;
          background: linear-gradient(to left, #f1f1f1, #fafafa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        
        #header_main_menu a {
          font-weight: 700;
          margin: 0 25px;
          color:black;
          text-decoration: none;
        }
        
        
        #header_main_menu a:hover {
          box-shadow: inset 0 -2px 0 0 #0e7294;
        }
        
        /*FOR HAMBURGER BUTTON THING!*/
        
        /*⠀⠀⠀⠀⠀⣀⢠⠄⠀⠀⠠⠄⡀⠀⠀⠀⠀⠀*/
        /*⠀⠀⠀⡐⠉⠄⠐⠂⠀⠈⠀⠀⠄⠑⠄⠀⠀⠀*/
        /*⢀⣀⣼⣥⣴⣦⣄⣰⣶⣄⣰⣶⣇⣷⣾⠤⣶⠆*/
        /*⠐⢻⣊⣵⣭⣮⣽⣭⣭⣉⣰⠴⢿⣿⣷⣿⡁⠀*/
        /*⠀⠘⢽⣯⣼⣬⣴⣿⣽⣹⣭⣑⣦⣤⢯⠟⠃⠀*/
        /*⠀⠀⣿⣷⣤⣹⠀⢽⣋⣀⣀⣤⡾⠵⢞⣶⡄⡀*/
        /*⠀⠐⡏⣹⠿⣽⠲⣾⡿⣿⡿⢿⣷⣿⠿⡯⠁⠓*/
        /*⠀⠀⠈⠶⣭⣦⣙⣛⣻⣿⣟⣩⣄⡶⠟⠁⠀⠀*/
        /*⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀*/
        
        .p-menu1{
           height: 100%;
        }
        

        .hamburger1 {
          height: 45px;
          z-index: 120;
          cursor: pointer;
        }
        
        @keyframes burger_color {
          0% {background-color: #0e7294;}
          50% {background-color: #1799c5;}
          100% {background-color: #0e7294;}
        }
                
        .hamburger1 div {
          background-color: #0e7294;
          animation: burger_color;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          position: relative;
          width: 40px;
          height: 5px;
          margin-top: 7px;
          -webkit-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
        }
        
        
        #toggle1 {
          display: none;
        }
        
        
        
        #toggle1:checked + .hamburger1 .top {
          -webkit-transform: rotate(-45deg);
                  transform: rotate(-45deg);
          margin-top: 22.5px;
          background-color: #ffffff;
          animation-iteration-count: 0;
        }
        
        #toggle1:checked + .hamburger1 .meat {
          -webkit-transform: rotate(45deg);
                  transform: rotate(45deg);
          margin-top: -5px;
          background-color: #ffffff;
          animation-iteration-count: 0;
        }
        
        #toggle1:checked + .hamburger1 .bottom {
          -webkit-transform: scale(0);
                  transform: scale(0);
          background-color: #ffffff;
          animation-iteration-count: 0;
        }
        
        #toggle1:checked ~ .menu1 {
          height: 275px;
        }
        
        
        /* Menu */
        .menu1 {
          background: linear-gradient(100deg, rgb(225,225,225) 0%, rgb(255,255,255) 100%);
          position: absolute;
          top: 123px;
          margin: 0;
          display: -ms-grid;
          display: grid;
          grid-template-rows: 1fr repeat(4, 0.5fr);
          grid-row-gap: 25px;
          padding: 0;
          list-style: none;
          clear: both;
          width: auto;
          text-align: center;
          height: 0;
          overflow: hidden;
          z-index: 9999;
          transition: all 0.3s ease;
        }
        
        .menu1 a:first-child {
        
          margin-top: 40px;
        }
        
        .menu1 a:last-child {
          margin-bottom: 40px;
        }
        
        .link1 {
          width: 100%;
          margin: 0;
          padding: 10px 0;
          font: 700 20px 'Oswald', sans-serif;
        }
        
        .link1:hover {
          transition: all 0.1s ease;
        }

      </style>
      <header>
        <nav>
          <ul id="header_main_menu">
            <li>
                <a href="../">
                    <h1>mcjosh</h1>
                </a>
                <p id="basic-text">
                    a josh mccoy website
                </p>
            </li>
       

            <li class="p-menu1">
              <nav id="navbar" class="navigation" role="navigation">
                <input id="toggle1" type="checkbox" />
                <label class="hamburger1" for="toggle1">
                  <div class="top"></div>
                  <div class="meat"></div>
                  <div class="bottom"></div>
                </label>
              
                <nav class="menu1">
                  <a class="link1" href="../about/">About</a>
                  <a class="link1" href="../recipes/">Recipes</a>
                  <a class="link1" href="../projects/">Projects</a>
                  <a class="link1" href="../directory/">Directory</a>
                </nav>
            </nav>
            </li>

            
          </ul>
        </nav>
        <div id="center-screen">
            <hr width="80%" size=3; color="white" style="margin-bottom: 30px"/>
        <div/>
      </header>
    `;
    }



}

customElements.define('header-item', Header)