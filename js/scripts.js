function searchPokemon() {
    let e = document.getElementById("searchInput").value.toLowerCase(),
        t = document.getElementById("result");
    (t.innerHTML = ""),
        "" !== e
            ? fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)
                  .then((e) => {
                      if (!e.ok) throw new Error("Pokemon not found!");
                      return e.json();
                  })
                  .then((e) => {
                      let n = e.name.charAt(0).toUpperCase() + e.name.slice(1),
                          o = e.id,
                          a = e.height,
                          i = e.types.map((e) => e.type.name).join(", "),
                          s = e.sprites.front_default;
                      t.innerHTML = `\n          <img src="${s}" alt="${n}">\n          <p>Name: ${n}</p>\n          <p>ID: ${o}</p>\n          <p>Type: ${i}</p>\n          <p>Height: ${a}</p>\n        `;
                  })
                  .catch((e) => {
                      t.innerHTML = e.message;
                  })
            : (t.innerHTML = "Please enter a Pokemon name, ID or Height.");
}


let pokemonRepository = (function () {
    let e = [],
        t = "https://pokeapi.co/api/v2/pokemon/?limit=450";
    function n(t) {
        e.push(t);
    }
    function o(e) {
        i(e).then(function () {
            a(e);
        });
    }
    function a(e) {
        let t = $(".modal-body"),
            n = $(".modal-title");
        n.empty(), t.empty();
        let o = $("<h1>" + e.name + "</h1>");
        n.append(o);
        let a = $('<img class="modal-img" style="width:50%">');
        a.attr("src", e.imageUrl), t.append(a);
        let i = $("<p>Height : " + e.height + "</p>");
        t.append(i);
    }
    function i(e) {
        let t = e.detailsUrl;
        return fetch(t)
            .then(function (e) {
                return e.json();
            })
            .then(function (t) {
                (e.imageUrl = t.sprites.front_default), (e.height = t.height), (e.types = t.types);
            })
            .catch(function (e) {
                console.error(e);
            });
    }
    return (
        $('[data-toggle="modal"]').on("click", function () {
            let e = $(this).attr("data-target");
            $(e).modal("show");
        }),
        window.addEventListener("keydown", (e) => {
            let t = document.querySelector("#modal-container");
            "Escape" === e.key && t.classList.contains("is-visible") && document.querySelector("#modal-container").classList.remove("is-visible");
        }),
        navigator.userAgentData &&
        navigator.userAgentData.brands &&
        navigator.userAgentData.brands.some(function (e) {
            return "Chrome" === e.brand;
        })
            ? console.log("User is using Chrome")
            : console.log("User is not using Chrome"),
        {
            add: n,
            getAll: function () {
                return e;
            },
            addListItem: function (e) {
                let t = document.querySelector(".pokemon-list"),
                    n = document.createElement("li");
                n.classList.add("list-group-item");
                let a = document.createElement("button");
                (a.innerText = e.name),
                    a.classList.add("btn-block"),
                    a.classList.add("btn-primary"),
                    a.classList.add("pokemon-button"),
                    a.setAttribute("data-toggle", "modal"),
                    a.setAttribute("data-target", "#exampleModal"),
                    n.classList.add("col-xl-3"),
                    n.classList.add("col-lg-4"),
                    n.classList.add("col-md-6"),
                    n.appendChild(a),
                    t.appendChild(n),
                    a.addEventListener("click", function () {
                        o(e);
                    });
            },
            showDetails: o,
            loadList: function () {
                return fetch(t)
                    .then(function (e) {
                        return e.json();
                    })
                    .then(function (e) {
                        e.results.forEach(function (e) {
                            n({ name: e.name, detailsUrl: e.url });
                        });
                    })
                    .catch(function (e) {
                        console.error(e);
                    });
            },
            loadDetails: i,
            showModal: a,
        }
    );
})();
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (e) {
        pokemonRepository.addListItem(e);
    });
});
