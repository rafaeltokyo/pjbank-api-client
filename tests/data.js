module.exports = {

    key: () => {
        return 'ef947cf5867488f744b82744dd3a8fc4852e529f';
    },

    credential: () => {
        return 'd3418668b85cea70aa28965eafaf927cd34d004c';
    },

    headers: () => {
        return {
            'content-type': 'application/json',
            'X-CHAVE': module.exports.key()
        };
    },

    payload_1: () => {
        return {
            "vencimento": "12/30/2019",
            "valor": 50.75,
            "juros": 0,
            "multa": 0,
            "desconto": "",
            "nome_cliente": "Matheus Fidelis",
            "cpf_cliente": "62936576000112",
            "endereco_cliente": "Rua Joaquim Vilac",
            "numero_cliente": "501",
            "complemento_cliente": "",
            "bairro_cliente": "Vila Teixeira",
            "cidade_cliente": "Campinas",
            "estado_cliente": "SP",
            "cep_cliente": "13301510",
            "logo_url": "http://wallpapercave.com/wp/xK64fR4.jpg",
            "texto": "Exemplo de emissão de boleto",
            "grupo": "Boletos",
            "pedido_numero": "2342"
        };
    }
}
