import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  articles = [
    {
      source: {
        id: "cbc-news",
        name: "CBC News",
      },
      author: "CBC News",
      title:
        "Trio of University of Toronto students win NFL's annual analytics competition | CBC Sports",
      description:
        "A trio of University of Toronto students beat out 300 other teams from around the world and walked away with $20,000 US at the NFLs annual Big Data Bowl, held in conjunction with the leagues scouting combine, held this year in Indianapolis.",
      url: "http://www.cbc.ca/sports/football/nfl/u-of-toronto-nfl-big-data-bowl-analytics-competition-1.6770112",
      urlToImage:
        "https://i.cbc.ca/1.6770195.1678161148!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/nfl-big-data-bowl-03-06-2023.jpg",
      publishedAt: "2023-03-07T11:07:19.2187723Z",
      content:
        "A trio of University of Toronto students has won what you could call the Super Bowl of analytics competitions.\r\nThe group beat out 300 other teams from around the world and walked away with $20,000 U… [+3891 chars]",
    },
    {
      source: {
        id: "les-echos",
        name: "Les Echos",
      },
      author: "Les Echos",
      title: "Grève contre la réforme des retraites: le point sur les blocages",
      description:
        "Annoncé depuis plusieurs semaines, le durcissement du mouvement contre la réforme des retraites se traduit, ce mardi, par de fortes perturbations dans les transports, mais aussi par le blocage des raffineries et des réductions de la production d'électricité.",
      url: "https://www.lesechos.fr/industrie-services/energie-environnement/greve-contre-la-reforme-des-retraites-le-point-sur-les-blocages-1912703",
      urlToImage:
        "https://media.lesechos.com/api/v1/images/view/64070154d1568f28d43019e6/1280x720/0703435732936-web-tete.jpg",
      publishedAt: "2023-03-07T09:17:11Z",
      content:
        "« Mettre la France à l'arrêt». Cette journée du mardi 7 mars a été cochée de longue date par les organisations syndicales pour durcir le mouvement contre la réforme des retraites et tenter de l'insc… [+5170 chars]",
    },
    {
      source: {
        id: "le-monde",
        name: "Le Monde",
      },
      author: "Sophie Fay",
      title:
        "Transdev se console aux Etats-Unis en rachetant First Transit, après un échec en France",
      description:
        "Regrettant le manque dinvestissement dans les transports dans lHexagone et le poids desmonopoles, Thierry Mallet, le PDG du groupe, se félicite de son acquisition américaine.",
      url: "https://www.lemonde.fr/economie/article/2023/03/07/transdev-se-console-aux-etats-unis-en-rachetant-first-transit-apres-un-echec-en-france_6164453_3234.html",
      urlToImage:
        "https://img.lemde.fr/2023/03/06/0/0/2560/1706/1440/960/60/0/33f7b75_1678118497045-fff.jpeg",
      publishedAt: "2023-03-07T06:00:08Z",
      content:
        "Lopérateur français de transport Transdev va doubler de taille aux Etats-Unis. Cette société, détenue à 66% par la Caisse des dépôts et consignations et à 34% par le groupe familial allemand Rethma… [+2659 chars]",
    },
    {
      source: {
        id: "polygon",
        name: "Polygon",
      },
      author: "Austen Goslin",
      title: "Creed 3s box office returns are already breaking records",
      description:
        "Michael B. Jordans Creed 3 now has the biggest opening of any Rocky movie — and the biggest opening of any sports movie ever made.",
      url: "https://www.polygon.com/23627357/creed-3-box-office-total-rocky-sports-movies",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/70xrj4JTdUgKEj6r_chhNOC99oE=/0x0:3000x1571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24456443/creed_iii_C3_21845_R_rgb.jpg",
      publishedAt: "2023-03-06T22:58:00Z",
      content:
        "The third film in the Creed trilogy has arrived and star/director Michael B. Jordans franchise is showing no signs of slowing down. Creed 3 opened to impressive box office returns, earning nearly $59… [+1173 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: "Doug McIntyre",
      title: "U.S. Soccer considering Oguchi Onyewu for sporting director",
      description:
        "Former United States World Cup defender Oguchi Onyewu is a candidate to fill U.S. Soccer's vacant sporting director job, multiple sources told FOX Sports.",
      url: "http://www.foxsports.com/stories/soccer/u-s-soccer-considering-oguchi-onyewu-for-sporting-director",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/03/1408/814/onyewuhoriz.png?ve=1&tl=1",
      publishedAt: "2023-03-06T19:21:59Z",
      content:
        "Former United States World Cup defender Oguchi Onyewu is a candidate to fill U.S. Soccer's vacant sporting director job, multiple sources told FOX Sports.\r\nOnyewu, 40, was most recently the secretary… [+2897 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: null,
      title: "Daily Briefing",
      description:
        "The day's top stories, from sports to movies to politics to world events.",
      url: "https://profile.usatoday.com/newsletters/daily-briefing/",
      urlToImage:
        "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
      publishedAt: "2021-08-15T15:35:07+00:00",
      content:
        "The day's top stories, from sports to movies to politics to world events.",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am News component constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ad90338bd16141958b8eefcdcc8a531d";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h1>NewsMonkey-Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : " "}
                  description={element.description ? element.description : ""}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
