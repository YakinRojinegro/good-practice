function htmlCreateInfoAdic(strAccountType_I, strPersonType_I = '-', strBenefNameSector_I = '-', strBankMaxAmount_I = '-', strAccountNumber_I, strCountry_I = '-', strEstate_I = '-', strCity_I = '-', strMaxAmount_I = '-', strPeriod_I = '-', strEconomicSector_I = '-', strRfcCurp_I = '-') {
  console.log($('.algo').next('.lol').length)
let lang = '1', arrstrInformacionAdicional = [], strPersonTypeInfo = '', 
    strAccountInfo = '', $contenido = '';
if($('.algo').next('.lol').length == 0) {
  switch(strAccountType_I) {
    case '71':
      (lang === '1') ?
        arrstrInformacionAdicional = ['Tipo de persona', 'Sector económico', 'Importe máximo'] 
      :
        arrstrInformacionAdicional = ['Person type', 'Economic sector', 'Max. amount'];
      if (strPersonType_I === '1' && lang === '1') {
        strPersonTypeInfo = 'Física';
      } else if (strPersonType_I === '1' && lang != '1') {
        strPersonTypeInfo = 'Individual Entity';
      } else if (lang === '1') {
        strPersonTypeInfo = 'Moral';
      } else {
        strPersonTypeInfo = 'Legal Entity';
      }
      
      $contenido = $(`<table class="lol">
                        <tr>
                          <td>${arrstrInformacionAdicional[0]}</td>
                          <td>${strPersonTypeInfo}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[1]}</td>
                          <td>${strBenefNameSector_I}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[2]}</td>
                          <td>${strBankMaxAmount_I}</td>
                        </tr>
                      </table>`);
      break;
    case '72':
      (lang === '1') ?
        arrstrInformacionAdicional = ['Tipo de pago', 'Banco', 'País', 'Estado', 'Ciudad', 
                                      'Importe máximo', 'Sector económico', 'RFC / CURP']
      :
        arrstrInformacionAdicional = ['Payment type', 'Bank', 'Country', 'Estate', 'City', 
                                      'Max. amount', 'Economic sector', 'RFC / CURP'];
      
      (strAccountNumber_I) ?
        strAccountInfo = 'SWIFT'
      :
        strAccountInfo = 'IBAN';
      $contenido = $(`<table class="lol">
                        <tr>
                          <td>${arrstrInformacionAdicional[0]}</td>
                          <td>${strAccountInfo}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[1]}</td>
                          <td>${strBankMaxAmount_I}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[2]}</td>
                          <td>${strCountry_I}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[3]}</td>
                          <td>${strEstate_I}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[4]}</td>
                          <td>${strCity_I}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[5]}</td>
                          <td>${strMaxAmount_I}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[6]}</td>
                          <td>${strEconomicSector_I}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[7]}</td>
                          <td>${strRfcCurp_I}</td>
                        </tr>
                      </table>`);
      break;
    case '73':
      (lang === '1') ?
        arrstrInformacionAdicional = ['Tipo de pago', 'Importe máximo', 'Banco', 'Periodo', 
                                      'Sector económico', 'RFC / CURP']
      :
        arrstrInformacionAdicional = ['Payment type', 'Max. amount', 'Bank', 'Period', 
                                      'Economic sector', 'RFC / CURP'];
      $contenido = $(`<table class="lol">
                        <tr>
                          <td>${arrstrInformacionAdicional[0]}</td>
                          <td>City NY DDA</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[1]}</td>
                          <td>${strMaxAmount_I}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[2]}</td>
                          <td>${strBankMaxAmount_I}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[3]}</td>
                          <td>${strPeriod_I}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[4]}</td>
                          <td>${strEconomicSector_I}</td>
                        </tr>
                        <tr>
                          <td>${arrstrInformacionAdicional[5]}</td>
                          <td>${strRfcCurp_I}</td>
                        </tr>
                      </table>`);
      break;
    default:
      break;
         }
  console.log('entro')
  $('.algo').after($contenido)
  } else {
    console.log('salio')
    $('.algo').next().toggle()
  }
}

/** /
  Manipulating an object
/**/
let $btnDoYourThing = $('.btn')
$btnDoYourThing.css('color', 'white')
$btnDoYourThing.css({'backgroundColor': 'green', 'boxShadow': '0px 0px 10px red'})