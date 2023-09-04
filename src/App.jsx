import { Header, Entertainment, Faq, Footer } from "./sections";

const App = () => {
  return (
    <main>
      <section>
        <Header />
      </section>

      <section>
        <Entertainment />
      </section>

      <section>
        <Faq />
      </section>

      <section>
        <Footer />
      </section>
    </main>

  )
}

export default App