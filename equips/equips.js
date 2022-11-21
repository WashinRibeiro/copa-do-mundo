let hino = document.getElementById("hino");
let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");

let playShow = function () {
  hino.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "flex";
};

let pauseShow = function () {
  hino.pause();
  playBtn.style.display = "flex";
  pauseBtn.style.display = "none";
};


class GroupList extends HTMLElement {
  div = document.createElement("div");
  group_a = [
    {
      name: "Catar",
      link: "./Grupo_A/catar.html",
      img: "../assets/images/Grupo_A/catar/grupoA_catar.webp",
    },
    {
      name: "Equador",
      link: "./Grupo_A/equador.html",
      img: "../assets/images/Grupo_A/equador/grupoA_equador.png",
    },
    {
      name: "Holanda",
      link: "./Grupo_A/holanda.html",
      img: "../assets/images/Grupo_A/holanda/grupoA_holanda.png",
    },
    {
      name: "Senegal",
      link: "./Grupo_A/senegal.html",
      img: "../assets/images/Grupo_A/senegal/grupoA_senegal.jpg",
    },
  ];

  constructor() {
    super().attachShadow({ mode: "open" }).append(this.div);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.div.innerHTML = `<style>
    .group {
        width: 100%;
        padding: 20px 5% 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
      }
      
      .flag {
        flex: 1;
        text-align: center;
      }
      
      .img {
        width: 100%;
        max-width: 320px;
        height: 180px;
        min-width: 250px;
        box-shadow: 0px 0px 20px #0000006e;
        transition: all 0.4s;
        object-fit: cover;
        box-shadow: 0px 0px 20px #0000006e;
        border-radius: 8px;
      }
      
      .img:hover {
        transform: scale(1.05);
        transition: all 0.4s;
      }
    </style>`

    this.div.innerHTML = this.group_a.reduce(
      (s, f) =>
        (s += `<a href="${f.link}" class="flag">
                <img
                    src="${f.img}"
                    alt="bandeira ${f.name}"
                />
            </a>`),
      ""
    );
  }
}

customElements.define("group-list-a", GroupList);











const template = document.createElement("template");
template.innerHTML = `
<style>


<div class="group">
    <a> <img/> </a>
</div>`;

class EmployeeCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
    let radiusInput = this.shadow.querySelector('#radius');
    let colorInput = this.shadow.querySelector('#color');
    radiusInput.addEventListener('change', this.changeRadius.bind(this));
    colorInput.addEventListener('change', this.changeColor.bind(this));
  }

  connectedCallback() {
    this.h3 = this.getAttribute("name");
    this.render();
  }

  render() {
    this.h3;
  }
}

window.customElements.define("employee-card", EmployeeCard);