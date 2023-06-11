function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}
//arreglado

function obtenerDatosHTML(nombre)
{
  return     HtmlService.createHtmlOutputFromFile(nombre).getContent();

}
