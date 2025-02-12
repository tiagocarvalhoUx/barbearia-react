export function Footer() {
  return (
    <section>
      {/* <!--Footer--> */}

      <div className="services">
        <h2>Venha Conhecer e Se Surpreenda!</h2>
      </div>

     

      <iframe  className="frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2105435743156!2d-50.4163971258102!3d-21.223498079886394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94964174744d99fb%3A0xd0bc9be7317b5c2f!2sAv.%20Jos%C3%A9%20Teles%20de%20Menezes%2C%20646%20-%20Bairro%20Conc%C3%B3rdia%201%2C%20Ara%C3%A7atuba%20-%20SP%2C%2016013-312!5e0!3m2!1spt-BR!2sbr!4v1739341179416!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        
      ></iframe>

      <footer className="footer">
        <div
          className="footer-icons"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <a href="https://www.instagram.com/barbeariaaprime/" target="_blank">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>

          <a href="https://www.facebook.com/barbeariaaprime" target="_blank">
            <i className="fa-brands fab fa-facebook fa-2x"></i>
          </a>
        </div>

        <div data-aos="zoom-in-down" data-aos-duration="3000">
          <img src="assets/logo-prime.svg" alt="Logo Barbearia" />
        </div>

        <p>Copyright 2024 | Prime Barbearia - Todos direitos reservados.</p>

        <a
          href="https://api.whatsapp.com/send/?phone=18981142927&text=Quero%20fazer%20um%20agendamento%20hoje"
          className="elite"
          target="_blank"
        >
          Elite-Web-Design
        </a>
      </footer>

      {/* <!--Button Whatsapp--> */}

      <a
        href="https://api.whatsapp.com/send/?phone=18981699704&text=Quero%20fazer%20um%20agendamento%20hoje!"
        className="btn-whatsapp"
        target="_blank"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500"
      >
        <img src="assets/whatssapp.svg" alt="Botão whatssapp" />
        <span className="tooltip-text">Agende seu Horário</span>
      </a>

      <script src="script.js"></script>
    </section>
  );
}
