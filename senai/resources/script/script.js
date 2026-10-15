
let users = ["Pedro", "Ana", "Joana", "Diego", "Davi Messias", "Cristiano"];

let searchUser = prompt("Digite o nome do usuário que deseja buscar:");

if (searchUser === "") {
    console.log("Não pode enviar em branco");
} else {
    let user = users.find(user =>
        user.toLowerCase().includes(searchUser.toLowerCase().trim())
    );

    if (user === undefined) {
        console.log("User not found");
    } else {
        console.log("Usuário encontrado: " + user);

        let index = users.indexOf(user);

        users[index] = "novo valor";

        console.log(users);
    }
}
