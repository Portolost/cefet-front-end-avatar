let nomeAvatarIn = document.querySelector("#input-avatar-nome");
let corAvatarIn = document.querySelector("#input-avatar-cor");

nomeAvatarIn.addEventListener('input', function(){
    let nomeAvatarEl = document.querySelector("#avatar-nome");
    nomeAvatarEl.innerHTML = nomeAvatarIn.value;
});

corAvatarIn.addEventListener('input', function(){
    let corpoAvatarEl = document.querySelector("#avatar-corpo");
    let cabecaAvatarEl = document.querySelector("#avatar-cabeca");

    corpoAvatarEl.style.backgroundColor = corAvatarIn.value;
    cabecaAvatarEl.style.backgroundColor = corAvatarIn.value;
});
