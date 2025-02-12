

  export function Hero () {
    return(
            <section>
                {/* <!--Header--> */}
    <div className="bg-home">
        <header>
            <nav className="header-content container">
                
                <div className="header-icons"  
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                    

                <a 
                href="https://www.instagram.com/barbeariaaprime/" 
                target="_blank"
                >
                   

                        <i className="fa-brands fa-instagram fa-2x" ></i>
                    </a>


                    <a 
                    href="https://www.facebook.com/barbeariaaprime"
                    target="_blank"
                    >
                        <i className="fa-brands fab fa-facebook fa-2x" ></i>
                    </a>

                    
                </div>
                    <div className="header-logo" 
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    >
                        
                    <img src="/assets/logo-prime.svg"
                        alt="Logo da Barbearia"/>
                    </div>
                    
                    <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">   
                        <a className="header-button" 
                        href="https://agendeonline.salonsoft.com.br/barbearia_prime"
                        target="_blank"
                        >
                            Agendar Horário
                        </a>
                    </div>

            </nav>

            <main className="hero container" data-aos="zoom-out-right" data-aos-duration="2000">
                <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
                <p>Horário de funcionamento: 
                <br/>
                <br/> 
                Segunda à Sexta 13:00 às 22:00</p>
                <p> Sábado das 9:00 às 17:00</p>

                <a 
                href="https://agendeonline.salonsoft.com.br/barbearia_prime" 
                className="button-contact" 
                target="_blank"
                >
                    Agendar Horário
                </a>


            </main>
        </header>
    </div>
          </section>


    
    )
}