import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/Seo'
import Course from '../components/Course'
import * as S from '../components/ListWrapper'

const coursesList = [
  {
    title: 'Criando um ambiente de Desenvolvimento no Windows',
    image: 'curso-windows.png',
    link: 'https://www.udemy.com/course/criando-um-ambiente-de-desenvolvimento-no-windows/',
    description: 'Comece a desenvolver no Windows do jeito certo e sem erros!'
  },
  {
    title: 'Gatsby: Crie um site PWA com React, GraphQL e Netlify CMS',
    image: 'curso-gatsby.jpg',
    link:
      'https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/?couponCode=PROMOJAN20',
    description:
      'Crie e coloque no ar um site extremamente rápido, utilizando boas práticas e as ferramentas mais utilizadas no mercado.'
  },
  {
    title: 'Mini-curso de Netlify no Youtube',
    image: 'netlify.png',
    link:
      'https://www.youtube.com/watch?v=a1cIjP1bueM&list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth',
    description:
      'Aprenda a botar seus projetos no ar de forma fácil e gratuita!'
  },
  {
    title: 'Aprenda a criar sites animados com Greensock',
    image: 'curso-greensock.png',
    link:
      'https://www.udemy.com/course/aprenda-a-criar-sites-animados-com-greensock/?couponCode=PROMOJAN20',
    description:
      'Aprenda a criar animações complexas de um jeito muito fácil e divertido!'
  },
  {
    title: 'Git e Github na Vida Real',
    image: 'git-real-life.png',
    link:
      'https://www.udemy.com/course/git-e-github-na-vida-real/?couponCode=PROMOJAN20',
    description:
      'Aprenda Workflows usados em empresa e domine o git para nunca mais ter problema nenhum!'
  },
  {
    title: 'Curso JS com TDD na Prática',
    image: 'js-tdd.png',
    link:
      'https://www.udemy.com/course/js-com-tdd-na-pratica/?couponCode=PROMOJAN20',
    description:
      'Aprenda testes na prática e garanta um currículo melhor para o mercado.'
  },
  {
    title: 'Aprendendo SVG do início ao avançado',
    image: 'curso-svg.png',
    link:
      'https://www.udemy.com/course/aprendendo-svg-do-inicio-ao-avancado/?couponCode=PROMOJAN20',
    description:
      'Se adiante e adquira um dos cursos mais completos de SVG totalmente em português.'
  },
  {
    title: 'Git e Github para Iniciantes',
    image: 'curso-git.jpg',
    link: 'https://www.udemy.com/git-e-github-para-iniciantes/',
    description:
      'Tudo que você precisa para começar a versionar seus arquivos e contribuir com a comunidade opensource.'
  }
]

const CursosPage = () => (
  <Layout>
    <SEO
      title="Cursos"
      description="Aprenda as mais diversas tecnologias em cursos separados em pequenos e completos módulos."
      image="https://willianjusten.com.br/assets/img/cursos/cursos-bg.png"
    />
    <S.ListWrapper>
      {coursesList.map(({ title, description, link, image }, i) => (
        <Course
          key={i}
          title={title}
          description={description}
          link={link}
          image={image}
        />
      ))}
    </S.ListWrapper>
  </Layout>
)

export default CursosPage
