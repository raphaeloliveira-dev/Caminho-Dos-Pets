var NUM = "5511975741191";
function wa(text) { return "https://wa.me/" + NUM + "?text=" + encodeURIComponent(text); }

// Botões com mensagem pronta
document.querySelectorAll("[data-wa]").forEach(function (a) {
  a.href = wa(a.getAttribute("data-msg"));
});

// Montador de mensagem
var state = { serv: "uma consulta", pet: "cachorro" };
var $name = document.getElementById("pname");
var $send = document.getElementById("send");

function build() {
  var name = $name.value.trim();
  var msg = "Olá! Vim pelo site da Caminho dos Pets e gostaria de agendar " + state.serv +
    ". Meu pet é " + (state.pet === "outro pet" ? "um outro tipo de pet" : "um " + state.pet) +
    (name ? " e se chama " + name : "") + ".";
  $send.href = wa(msg);
}

function group(id, key) {
  var box = document.getElementById(id);
  box.addEventListener("click", function (e) {
    var b = e.target.closest(".opt");
    if (!b) return;
    box.querySelectorAll(".opt").forEach(function (o) { o.setAttribute("aria-pressed", "false"); });
    b.setAttribute("aria-pressed", "true");
    state[key] = b.getAttribute("data-v");
    build();
  });
}
group("serv", "serv");
group("pet", "pet");
$name.addEventListener("input", build);
build();
