// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  S
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  logo: require('../assets/coopersystem-logo.png')
};

preloader(images);

const theme = createTheme(
  {
    primary: '#4CAF50',
    darkPrimary: '#388E3C',
    lightPrimary: '#C8E6C9',
    textIcons: '#FFFFFF',
    accent: '#9E9E9E',
    primaryText: '#212121',
    secondaryText: '#757575',
    divider: '#BDBDBD'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} transition={['slide']} progress='bar' padding={1}>
        <Slide>
            <Text>
              Existe um grave problema Coopersystem, que causa bastante stress,
              insegurança, atrapalha investimentos de longo prazo na cooperativa, e
              bem possivelmente, causa impactos na produtividade.
            </Text>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote textColor='primaryText'>
              Nenhum homem deve ser um juiz em sua própria causa, ou em
              qualquer causa sobre a qual tenha o menor interesse ou viés.
            </Quote>
            <Cite>
              Alexander Hamilton, O Federalista, no. 80
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote textColor='primaryText' textSize='1.5em'>
              Quando os poderes legislativo e executivo estão unidos na mesma
              pessoa, ou órgão, na pode haver liberdade, porque pode surgir apreensão.
              [...] Novamente, não há liberdade, se o poder judiciário não for separado
              do legislativo e do executivo.
            </Quote>
            <Cite>
              Charles de Monstesquieu
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote textColor='primaryText'>
              § 4º Não será objeto de deliberação a proposta de emenda tendente a abolir:
              <List>
              <ListItem>III - a separação dos Poderes</ListItem>
              </List>
            </Quote>
            <Cite>
              Constituição Federal
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide>
            <Heading>
              Disfuncionalidade
            </Heading>
            <Text>
              Não existe nenhum órgão permanente na Coopersystem com o poder de reverter
              ou anular as decisões executivas do Conselho de Administração (CA). Desta forma,
              o CA acumula para si, no dia-a-dia, as funções de executor e juiz de suas próprias
              ações, bem como as dos seus membros.
            </Text>
        </Slide>
        <Slide>
          <Text>
            Como evitar esta grave disfuncionalidade?
          </Text>
        </Slide>
        <Slide>
          <Heading>Proposta</Heading>
          <Text>
            Separar a administração da cooperativa em Conselho de Administração e
            Diretoria Executiva, e vedar a acumulação de cargos.
          </Text>
        </Slide>
        <Slide>
          <Heading textSize='0.5em'>
            Exemplo: SISCOOB (http://www.sicoobunicoob.com.br/wp-content/uploads/2015/06/Estatuto-Social3.pdf)
          </Heading>
          <List textSize='0.8em'>
            <ListItem>Art. 52 A Cooperativa será administrada por Conselho de Administração e por Diretoria Executiva, de
acordo com as competências previstas neste Estatuto Social.</ListItem>
            <ListItem>Art. 69 § 1º É admitida a acumulação de cargos de conselheiro de administração e de diretor para, no máximo,
um dos membros do Conselho de Administração e vedada a acumulação das presidências.</ListItem>
            <ListItem>Art. 69 § 2º O Conselho de Administração, por maioria simples, poderá destituir os membros da Diretoria
Executiva, a qualquer tempo.</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading textSize='0.5em'>
            Exemplo: SISCOOB (DAS COMPETÊNCIAS DO CONSELHO DE ADMINISTRAÇÃO)
          </Heading>
          <List textSize='0.6em'>
            <ListItem>I. fixar diretrizes, [...] acompanhando a execução;</ListItem>
            <ListItem>II. aprovar e supervisionar a execução dos projetos elaborados pelos executivos;</ListItem>
            <ListItem>VIII. deliberar sobre a admissão, a eliminação ou a exclusão de associados, podendo, aplicar, por
escrito, advertência prévia;</ListItem>
            <ListItem>XVII. eleger ou reconduzir os membros da Diretoria Executiva, na primeira reunião do Conselho de
Administração eleito, para homologação do Banco Central do Brasil;</ListItem>
            <ListItem>XVII. destituir a qualquer tempo os membros da Diretoria Executiva;</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading textSize='0.5em'>
            Exemplo: SISCOOB (DAS COMPETÊNCIAS DA DIRETORIA EXECUTIVA)
          </Heading>
          <List textSize='0.7em'>
            <ListItem>I. adotar medidas para o cumprimento das diretrizes fixadas pelo Conselho de Administração;</ListItem>
            <ListItem>III. prestar contas ao Conselho de Administração quanto às medidas adotadas visando o
cumprimento das diretrizes fixadas e quanto à execução de projetos, inclusive prazos fixados;</ListItem>
            <ListItem>VIII. propor ao Conselho de Administração qualquer assunto relacionado ao plano de cargos e
salários e à estrutura organizacional da Cooperativa;</ListItem>
            <ListItem>IX. avaliar a atuação dos empregados, adotando as medidas apropriadas;</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
            Ideia chave
          </Heading>
          <Text>
            Assim como ocorre na maior parte das organizações com múltiplos acionistas,
            ou cooperados, os diretores executivos devem responder à uma mesa ou
            conselho permanente superior, de papel estratégico, guardião da vontade dos cooperados.
            Seus membros não podem ser os mesmos, sob pena de juízo em causa própria.
          </Text>
        </Slide>
        <Slide>
          <Heading>
            Proposta de Alteração no Estatuto Social da Coopersystem
          </Heading>
          <Text>
            ...
          </Text>
        </Slide>
      </Deck>
    );
  }
}
