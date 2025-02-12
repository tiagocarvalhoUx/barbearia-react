export function Services() {
  return (
    // <!--Services-->
    <section className="services">
      <div className="services-content container">
        <h2>Serviços</h2>
        <p>
          {" "}
          Cortes de cabelo personalizados – Do clássico ao moderno, realizamos
          cortes que combinam com sua personalidade e estilo. Barba alinhada e
          bem cuidada – Técnicas precisas para modelagem, hidratação e
          acabamento perfeito da sua barba. Tratamentos especiais – Hidratação
          capilar, relaxamento e outros serviços para manter seu visual
          impecável. Atendimento diferenciado – Conforto, qualidade e um momento
          de relaxamento enquanto cuidamos de você.
        </p>
      </div>

      <section className="haircuts">
        <div className="haircut" data-aos="flip-up" data-aos-delay="150">
          <img src="assets/corte1.png" alt="Corte Normal" />
          <div className="haircut-info">
            <strong>Corte Adulto</strong>
            <button>R$35,00</button>
          </div>
        </div>

        <div className="haircut" data-aos="flip-up" data-aos-delay="250">
          <img src="assets/criança.png" alt="Corte Infatil" />
          <div className="haircut-info">
            <strong>Corte Infatil (até 11anos)</strong>
            <button>R$30,00</button>
          </div>
        </div>

        <div className="haircut" data-aos="flip-up" data-aos-delay="250">
          <img src="assets/corte2.png" alt="Barba Completa" />
          <div className="haircut-info">
            <strong>Barba</strong>
            <button>R$30,00</button>
          </div>
        </div>

        <div className="haircut" data-aos="flip-up" data-aos-delay="400">
          <img src="assets/corte3.png" alt="Corte e Barba" />
          <div className="haircut-info">
            <strong>Cabelo & Barba(Combo)</strong>
            <button>R$60,00</button>
          </div>
        </div>
      </section>
    </section>
  );
}
