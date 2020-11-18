const user = {
    name: 'Marcilio',
    lastName: "Silva"
};

function retornaNomeCompleto(user){
    return{
        ...user,// copiando as propriedades do obj: user
        fullName: `${user.name} ${user.lastName}`
    }
}

const userNomeCompleto = retornaNomeCompleto(user);

console.log(userNomeCompleto);