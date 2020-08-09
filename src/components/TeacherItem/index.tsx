import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEVPVKw0jxfEw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=p18u5LPiUVIo9368NuCXQ3z2AL6BrpDud8m-NvIvfT8" alt="Paula Alves"/>
          <div>
            <strong>Paula Alves</strong>
            <span>Química</span>
          </div>
        </header>
          <p>
            Entusiasta das melhores tecnologias avançadas.
            <br /><br />
            Entusiasta das melhores tecnologias avançadas. Entusiasta das melhores tecnologias avançadas. Entusiasta das melhores tecnologias avançadas. Entusiasta das melhores tecnologias avançadas. Entusiasta das melhores tecnologias avançadas. Entusiasta das melhores tecnologias avançadas.
          </p>
          <footer>
            <p>
              Preço/hora:
              <strong>R$ 20,00</strong>
            </p>
            <button type="button">
              <img src={whatsapp} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
      </article>
    )
}

export default TeacherItem;