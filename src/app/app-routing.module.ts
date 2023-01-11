
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'online-rar-extractor',
    loadChildren: () =>
      import('./modules/rar-file-extractor/rar-file-extractor.module').then(
        (m) => m.RarFileExtractorModule
      ),
  },
  {
    path: 'xml-to-json-convertor',
    loadChildren: () =>
      import('./modules/xml-json/xml-json.module').then((m) => m.XmlJsonModule),
  },
  {
    path: 'json-to-yaml-convertor',
    loadChildren: () =>
      import('./modules/json-yaml/json-yaml.module').then(
        (m) => m.JsonYamlModule
      ),
  },
  {
    path: 'yaml-to-json-convertor',
    loadChildren: () =>
      import('./modules/yaml-json/yaml-json.module').then(
        (m) => m.YamlJsonModule
      ),
  },
  {
    path: 'json-to-xml-convertor',
    loadChildren: () =>
      import('./modules/json-xml/json-xml.module').then((m) => m.JsonXmlModule),
  },
  {
    path: 'xml-formatter',
    loadChildren: () =>
      import('./modules/xml-formatter/xml-formatter.module').then(
        (m) => m.XmlFormatterModule
      ),
  },
  {
    path: 'json-formatter',
    loadChildren: () =>
      import('./modules/json-formatter/json-formatter.module').then(
        (m) => m.JsonFormatterModule
      ),
  },
  {
    path: 'yaml-formatter',
    loadChildren: () =>
      import('./modules/yaml-formatter/yaml-formatter.module').then(
        (m) => m.YamlFormatterModule
      ),
  },
  {
    path: 'pdf-password-remover',
    loadChildren: () =>
      import('./modules/pdf-password-remover/pdf-password-remover.module').then(
        (m) => m.PdfPasswordRemoverModule
      ),
  },
  {
    path: 'excel-html',
    loadChildren: () =>
      import('./modules/excel-html/excel-html.module').then(
        (m) => m.ExcelHtmlModule
      ),
  },
  {
    path: 'api-testing',
    loadChildren: () =>
      import('./modules/api-testing/api-testing.module').then(
        (m) => m.ApiTestingModule
      ),
  },
  {
    path: 'html-table-generator',
    loadChildren: () =>
    import('./modules/html-table-generator/html-table-generator/html-table-generator.module').then((m) => m.HtmlTableGeneratorModule),
  },
  {
    path: 'case-converter',
    loadChildren: () =>
      import('./case-converter/caseconverter.module').then(
        (m) => m.CaseconverterModule
      ),
  },
  {
    path: 'character-counter',
    loadChildren: () =>
      import('./modules/character-counter/character-counter.module').then(
        (m) => m.CharacterCounterModule
      ),
  },
  {
    path: 'base64-image',
    loadChildren: () =>
      import('./modules/base64-image/base64-image.module').then(
        (m) => m.Base64ImageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
