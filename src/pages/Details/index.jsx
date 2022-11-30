import { Container, Links, Content } from "./styles.js"
import { Button } from "../../components/Button/index.jsx"
import { Header } from "../../components/Header/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { Tag } from "../../components/Tag/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"

export function Details(){

  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur molestiae porro illum maiores, odit exercitationem iure cum corrupti minima asperiores quos similique aspernatur, autem rerum voluptate. Vero, aliquid exercitationem.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://linkqualquer.com</a></li>
              <li><a href="#">https://linkqualquer.com</a></li>
              <li><a href="#">https://linkqualquer.com</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="Node"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>

    </Container>
  )
}