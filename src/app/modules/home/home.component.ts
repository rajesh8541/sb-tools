import { Component, OnInit } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Online Tools for developers';
  subtitle = `Every developer, especially in the
    digital age, outsources new technologies, and there is a need to migrate
    between tech stacks on a regular basis. Online Dev Tools is one such hub
    that satisfies all of the requirements for Web Development. The ability
    to outlive the developer's goal is to create visually appealing,
    user-friendly websites. It's about knowing how to use the right
    development tools to help you with your work. The importance of
    implementation is equal to that of vision. That is why each of us has
    access to so many unique development tools to reinvent and renew our
    work.`;
  constructor(private seo: SEOService) {}

  moduleList: any[] = [
    {
      title: 'Rar Extractor',
      subtitle: 'Upload RAR file and get extracted folder.',
      slug: '/online-rar-extractor/',
    },
    {
      title: 'PDF Pasword Remover',
      subtitle: 'Upload password protected pdf and get a pdf without password.',
      slug: '/pdf-password-remover/',
    },
    {
      title: 'Json to XML Convertor',
      subtitle: 'Convert your json file to xml.',
      slug: '/json-to-xml-convertor/',
    },
    {
      title: 'XML to Json Convertor',
      subtitle: 'Convert your XML file to json.',
      slug: '/xml-to-json-convertor/',
    },
    {
      title: 'Json to YAML Convertor',
      subtitle: 'Convert your json file to yaml.',
      slug: '/json-to-yaml-convertor/',
    },
    {
      title: 'YAML to Json Convertor',
      subtitle: 'Convert your yaml file to json.',
      slug: '/yaml-to-json-convertor/',
    },
    {
      title: 'Json Validator and Formatter',
      subtitle: 'Validate or Format your JSON file.',
      slug: '/json-formatter/',
    },
    {
      title: 'XML Validator or Formatter',
      subtitle: 'Validate or Format your XML file.',
      slug: '/xml-formatter/',
    },
    {
      title: 'YAML Validator or Formatter',
      subtitle: 'Validate or Format your YAML file.',
      slug: '/yaml-formatter/',
    },
    {
      title: 'Excel to HTML Convertor',
      subtitle: 'Convert your Excel file to HTML.',
      slug: '/excel-html/',
    },
    {
      title: 'Test Your API',
      subtitle: 'API Testing.',
      slug: '/api-testing/',
    },
    {
      title: 'HTML Table Generator',
      subtitle: 'Generate your HTML Table.',
      slug: '/html-table-generator/'
    },
    {
      title: 'Case Convertor',
      subtitle: 'Convert Case of text.',
      slug: '/case-converter/',
    },
    {
      title: 'Character Counter',
      subtitle: 'Convert Case of text.',
      slug: '/character-counter/',
    },
    {
      title: 'Base64 to Image Convertor',
      subtitle: 'Base64 to Image',
      slug: '/base64-image/',
    }
  ];

  ngOnInit(): void {
    this.seo.setSEO(
      this.title,
      'We provide all types of easy to use tools for developers which will be helpful for them in their day to day working.'
    );
  }
}
