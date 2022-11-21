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

function selections() {
  grupoA();
  grupoB();
  grupoC();
  grupoD();
  grupoE();
}

function grupoA() {
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

  window.document.getElementById("grupo_a").innerHTML = this.group_a.reduce(
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

function grupoB() {
  group_b = [
    {
      name: "Estados Unidos",
      link: "./Grupo_B/estados_unidos.html",
      img: "../assets/images/Grupo_B/estados_unidos/grupoB_estados_unidos.png",
    },
    {
      name: "Inglaterra",
      link: "./Grupo_B/inglaterra.html",
      img: "../assets/images/Grupo_B/inglaterra/grupoB_inglaterra.png",
    },
    {
      name: "Irã",
      link: "./Grupo_B/ira.html",
      img: "../assets/images/Grupo_B/ira/grupoB_ira.png",
    },
    {
      name: "Pais de Gales",
      link: "./Grupo_B/pais_de_gales.html",
      img: "../assets/images/Grupo_B/pais_de_gales/grupoB_pais_de_gales.png",
    },
  ];

  window.document.getElementById("grupo_b").innerHTML = this.group_b.reduce(
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

function grupoC() {
  group_c = [
    {
      name: "Arábia Saudita",
      link: "./Grupo_C/arabia_saudita.html",
      img: "../assets/images/Grupo_C/arabia_saudita/grupoC_arabia_saudita.png",
    },
    {
      name: "Argentina",
      link: "./Grupo_C/mexico.html",
      img: "../assets/images/Grupo_C/mexico/grupoC_mexico.jpg",
    },
    {
      name: "Mexico",
      link: "./Grupo_B/ira.html",
      img: "../assets/images/Grupo_B/ira/grupoB_ira.png",
    },
    {
      name: "Polonia",
      link: "./Grupo_C/polonia.html",
      img: "../assets/images/Grupo_C/polonia/grupoC_polonia.png",
    },
  ];

  window.document.getElementById("grupo_c").innerHTML = this.group_c.reduce(
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

function grupoD() {
  group_d = [
    {
      name: "Austrália",
      link: "./Grupo_D/australia.html",
      img: "../assets/images/Grupo_D/australia/grupoD_australia.webp",
    },
    {
      name: "Dinamarca",
      link: "./Grupo_D/dinamarca.html",
      img: "../assets/images/Grupo_D/dinamarca/grupoD_dinamarca.png",
    },
    {
      name: "França",
      link: "./Grupo_D/franca.html",
      img: "../assets/images/Grupo_D/franca/grupoD_franca.png",
    },
    {
      name: "Tunisia",
      link: "./Grupo_D/tunisia.html",
      img: "../assets/images/Grupo_D/tunisia/grupoD_tunisia.png",
    },
  ];

  window.document.getElementById("grupo_d").innerHTML = this.group_d.reduce(
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

function grupoE() {
  group_e = [
    {
      name: "Alemanha",
      link: "./Grupo_E/alemanha.html",
      img: "../assets/images/Grupo_E/alemanha/grupoE_alemanha.png",
    },
    {
      name: "Costa Rica",
      link: "./Grupo_E/costa_rica.html",
      img: "../assets/images/Grupo_E/costa_rica/grupoE_costa_rica.png",
    },
    {
      name: "Espanha",
      link: "./Grupo_E/espanha.html",
      img: "../assets/images/Grupo_E/espanha/grupoE_espanha.webp",
    },
    {
      name: "Japão",
      link: "./Grupo_E/japao.html",
      img: "../assets/images/Grupo_E/japao/grupoE_japao.jpeg",
    },
  ];

  window.document.getElementById("grupo_e").innerHTML = this.group_e.reduce(
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

function grupoF() {
  group_f = [
    {
      name: "Brasil",
      link: "./Grupo_G/brasil.html",
      img: "../assets/images/Grupo_G/brasil/grupoG_brasil.png",
    },
    {
      name: "Camarões",
      link: "./Grupo_G/camaroes.html",
      img: "../assets/images/Grupo_G/camaroes/grupoG_camaroes.png",
    },
    {
      name: "Sérvia",
      link: "./Grupo_G/servia.html",
      img: "../assets/images/Grupo_G/servia/grupoG_servia.webp",
    },
    {
      name: "Suíça",
      link: "./Grupo_G/suica.html",
      img: "../assets/images/Grupo_G/suica/grupoG_suica.webp",
    },
  ];

  window.document.getElementById("grupo_e").innerHTML = this.group_e.reduce(
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
