document.addEventListener('DOMContentLoaded', function() {
    const NameElement = document.querySelector('#NameElement');
    const UsernameElement = document.querySelector('#UsernameElement');
    const AvatarElement = document.querySelector('#AvatarElement');
    const ReposElement = document.querySelector('#ReposElement');
    const FollowersElement = document.querySelector('#FollowersElement');
    const FollowingElement = document.querySelector('#FollowingElement');
    const LinkElement = document.querySelector('#LinkElement');
    const EndPoint = 'https://api.github.com/users/jcosilva';


    fetch(EndPoint)
        .then(function(answer) {
            return answer.json();
        })
        .then(function(json) {
        //Avatar do Usuário
            AvatarElement.src = json.avatar_url;
        //Nome do Usuário
            if (json.name == null) {
                NameElement.innerText = "Update GitHub Info";
            } else {
                NameElement.innerText = json.name;
            }
        //Username do Usuário
            UsernameElement.innerText = json.login;
        //Número de Repositórios do Usuário
            ReposElement.innerText = json.public_repos;
        //Número de seguidores do Usuário
            FollowersElement.innerText = json.followers;
        //Número de pessoas sendo seguindas pelo Usuário
            FollowingElement.innerText = json.following;
        //Link para a página do GitHub do Usuário
            LinkElement.href = json.html_url
        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar os dados do GitHub, por favor tente novamente mais tarde");
        })
})