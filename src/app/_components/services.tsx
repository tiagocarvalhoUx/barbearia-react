export function Services() {
  return (
    // <!--Services-->
    <section className="services">
      <div className="services-content container">
        <h2>Serviços</h2>
        <p>
         
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
            <strong> Corte Infantil (até 11 anos)  </strong>
           
            <button> R$30,00</button>
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
            <strong>Cabelo Barba</strong>
            <button>R$60,00</button>
          </div>
        </div>
      </section>

      <div className="container-service"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"> 

              <a 
                href="https://agendeonline.salonsoft.com.br/barbearia_prime" 
                className="service-button" 
                target="_blank"
                >
                    Agendar Horário
                </a>
      
      </div>

    </section>
                    
     
       
  );
}





