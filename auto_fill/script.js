function tabela(){
    let dad           = document.createElement('ul');  //cria pai
    let childName     = document.createElement('li'); //cria filho 1 name
    let childEmail    = document.createElement('li'); //cria filho 2 email
    let childFone     = document.createElement('li'); //cria filho 3 fone
    let childGitHub   = document.createElement('li'); //cria filho 4 github
    let childLinkedin = document.createElement('li'); //cria filho 5 linkedin
    let childSite     = document.createElement('li'); //cria filho 6 site

    let inputName     = document.createElement('button');
    let inputEmail    = document.createElement('button');
    let inputFone     = document.createElement('button');
    let inputGitHut   = document.createElement('button');
    let inputLinkedin = document.createElement('button');
    let inputSite     = document.createElement('button');


    //add info
    dad.id  = "autopreenchimento";
    
    childName.id     = 'name';
    childEmail.id    = 'email_';
    childFone.id     = 'fone';
    childGitHub.id   = 'github';
    childLinkedin.id = 'linkedin';
    childSite.id     = 'site';

    childName.className     = "elementos";
    childEmail.className    = "elementos";
    childFone.className     = "elementos";
    childGitHub.className   = "elementos";
    childLinkedin.className = "elementos";
    childSite.className     = "elementos";

    inputName.type     = "button";
    inputEmail.type    = "button";
    inputFone.type     = "button";
    inputGitHut.type   = "button";
    inputLinkedin.type = "button";
    inputSite.type     = "button";

    inputName.onclick = inserir();



    inputName.textContent     = "Jeferson Luiz Alves de Souza";
    inputEmail.textContent    = "luiz_cleidi@hotmail.com";
    inputFone.textContent     = "27988655236";
    inputGitHut.textContent   = "https://github.com/jeffalves33";
    inputLinkedin.textContent = "https://www.linkedin.com/in/jeffalves33/";
    inputSite.textContent     = "https://jeffalves33.github.io/jeffalves33/";

    
    
    //add no HTML
    document.body.appendChild(dad);
    
    document.getElementById("autopreenchimento").appendChild(childName);
    document.getElementById("autopreenchimento").appendChild(childEmail);
    document.getElementById("autopreenchimento").appendChild(childFone);
    document.getElementById("autopreenchimento").appendChild(childGitHub);
    document.getElementById("autopreenchimento").appendChild(childLinkedin);
    document.getElementById("autopreenchimento").appendChild(childSite);
    
    document.getElementById('name').appendChild(inputName);
    document.getElementById('email_').appendChild(inputEmail);
    document.getElementById('fone').appendChild(inputFone);
    document.getElementById('github').appendChild(inputGitHut);
    document.getElementById('linkedin').appendChild(inputLinkedin);
    document.getElementById('site').appendChild(inputSite);





    console.log(dad)
}


function inserir(){g
}