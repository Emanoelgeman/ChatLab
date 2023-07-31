/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */
let listaMensagem = [];

function adicionarMensagem(apelido, mensagem)
{
  listaMensagem.push({

    "apelido": apelido,
    "mensagem": mensagem,


  })
}

function formatarMensagens()
{
  let htmlData = '';
  for(let i in listaMensagem)
  {
    let mensagem = listaMensagem[i];

    htmlData += `
    <div class="chat-message">
      <span class="chat-message-apelido">
        ${mensagem.apelido}:
      </span>
      <span class="chat-message-item">
        ${mensagem.mensagem}
      </span>
    </div>
    `;
  }
  document.getElementById('listaMensagem').innerHTML = htmlData;
}

function commitMessageClickHandler(){
  if (document.getElementById('apelido-input').value.trim().length == 0)
  {
    document.getElementById('apelido-input').focus();
      return;
  }

  let apelido = document.getElementById('apelido-input').value;
  if (document.getElementById('message-input').value.trim().length == 0)
  {
    document.getElementById('message-input').focus();
      return;
  }
  let mensagem = document.getElementById('message-input').value;
  adicionarMensagem(apelido, mensagem);
  formatarMensagens(); 
  document.getElementById('message-input').value = '';
}

adicionarMensagem('emanoel', 'parabens')
adicionarMensagem('paulo', 'legal')
adicionarMensagem('pedro', 'top')
window.addEventListener('load', function (){
  formatarMensagens();
})
// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------