export function About() {
  return (
    <section className="about">
      <div className="container about-content">
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img src="/assets/images.svg" alt="imagem sobre a Barbearia" />
        </div>

        <div
          className="about-description"
          data-aos="zoom-out-left"
          data-aos-duration="500"
        >
          <h2>Sobre</h2>
          <p>
            Bem-vindo à Barbearia Prime – Estilo e Tradição para Homens de
            Atitude Na Barbearia Prime, não oferecemos apenas cortes de cabelo e
            barba, mas sim uma experiência completa de cuidado e estilo para
            homens que valorizam a sua aparência. Com uma equipe de
            profissionais qualificados e um ambiente confortável, garantimos um
            atendimento personalizado para que você saia renovado e confiante.
            Cortes modernos e tradicionais – Do clássico ao contemporâneo, nosso
            time está sempre atualizado com as última.
          </p>

          <p>
            Horário de funcionamento:
            <br />
            <br />
            Segunda à Sexta das 13:00 às 22:00
          </p>
          <p> Sábado das 9:00 às 17:00</p>
        </div>
      </div>
    </section>
  );
}
