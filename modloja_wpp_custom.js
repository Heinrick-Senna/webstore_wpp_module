$(document).ready(function () {isReady('allModulosOk', 'modloja_wpp_custom()');});

function modloja_wpp_custom(){
    if (objetos.InfosLojas == undefined || objetos.InfosLojas == null ) {
        window.setTimeout("modloja_wpp_custom()", 1000);
        return;
    }
    setTimeout(() => {
        customListWppButton();
        customWppCart();
    }, 5000)
}

function customWppCart() {
    let cell = JSON.parse(objetos.InfosLojas).dadoscontato.fone_3;
    
    if (document.querySelector('#HdEtapaLoja').value != 'carrinho') return;
    if (!cell) return;

    let button = document.createElement('a');
        button.setAttribute('class', 'wpp-cartbutton')
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" pointer-events="all" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>' + '<span>Compre pelo <b>WhatsApp</b></span>';
		
    let msg = "Olá,%0ATenho%20interesse%20em%20adquirir%20os%20produtos%20abaixo:%0A";
	
		document.querySelectorAll('.LV_LinhaCarrinhoItens_V2').forEach(elm => {
			msg += '%0A';
			msg += elm.querySelector('.LV_LinhaCarrinhoDivItem_Titulo_V2').innerHTML;
			msg += '%0A';
			msg += window.location.protocol + '//' + window.location.hostname + elm.querySelector('a').getAttribute('href');
		});

    msg += '%0A%0AObrigado.';

    button.setAttribute('href', 'https://api.whatsapp.com/send?phone=55' + cell.replace(')', '').replace('(', '') + '&text=' + msg);
    document.querySelector('.LV_Carrinho_V2_BotoesCarrinho_Right').append(button);
};

function customListWppButton() {
    let cell = JSON.parse(objetos.InfosLojas).dadoscontato.fone_3;

    if (!cell) return;

    document.querySelectorAll('.list-item .div-item').forEach(elm => {
        if (elm.querySelector('.prod-no-qty')) {

            let button = document.createElement('a')
            button.setAttribute('class', 'wpp-listbutton')
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" pointer-events="all" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>' + '<span>Compre pelo <b>WhatsApp</b></span>';
            
            let msg = "Olá,%0ATenho%20interesse%20em%20adquirir%20este%20produto%20abaixo:%0A%0A";
            msg += elm.querySelector('.prod-nome > a').getAttribute('title');
            msg += '%0A';
            msg += window.location.protocol + '//' + window.location.hostname + elm.querySelector('.prod-nome > a').getAttribute('href');
            msg += '%0A%0AObrigado.';
            
            button.setAttribute('href', 'https://api.whatsapp.com/send?phone=55' + cell.replace(')', '').replace('(', '') + '&text=' + msg);
            
            elm.querySelector('.prod-no-qty').parentNode.classList.add('prod-no-wpp')
            elm.querySelector('.prod-no-qty').append(button)
        }
        });
    };