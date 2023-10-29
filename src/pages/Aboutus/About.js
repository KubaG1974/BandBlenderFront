import React from 'react';
import styles from './About.module.css';

const About = () => {
   
return (
    <div className="about-us">
      <header>
        <h1>O Nas</h1>
      </header>
      <section className="mission">
    <h2>Nasza Misja</h2>
    <p>
        Naszą misją jest stworzenie globalnej społeczności muzycznej, która umożliwia muzykom, zarówno doświadczonym profesjonalistom, jak i początkującym talentom, odnalezienie się w świecie muzyki. Nasza platforma dąży do:
    </p>
    <ul>
        <li>
            <strong>-Łączenia Muzyków:</strong> Naszym głównym celem jest umożliwienie muzykom znalezienie partnerów muzycznych, niezależnie od lokalizacji czy doświadczenia. Chcemy, aby nasi użytkownicy mogli znaleźć właściwych ludzi do tworzenia muzyki, dzięki czemu wspólne pasje i pomysły mogą znaleźć swoje wyraz w dźwiękach.
        </li>
        <li>
            <strong>-Wspierania Rozwoju Talentów:</strong> Chcemy być platformą, na której młodzi i zdolni muzycy mogą zdobywać doświadczenie, uczyć się od bardziej doświadczonych kolegów i realizować swoje muzyczne marzenia. Dla doświadczonych artystów, nasza aplikacja daje szansę na poszerzenie horyzontów i eksperymentowanie z różnymi stylami muzycznymi.
        </li>
        <li>
            <strong>-Promowania Kariery Muzycznej:</strong> Nasza platforma ma wspierać rozwijających się artystów w promowaniu swojej kariery. Dzięki możliwości prezentowania swojego portfolio i łączenia z fanami oraz potencjalnymi współpracownikami, chcemy pomóc użytkownikom w budowaniu swojej marki muzycznej.
        </li>
        <li>
            <strong>-Budowania Pozytywnej Społeczności:</strong> Chcemy, aby nasi użytkownicy czuli się częścią wspierającej społeczności, która docenia i inspiruje się nawzajem. Nasza misja to promowanie pozytywnych relacji i współpracy w świecie muzyczki.
        </li>
        <li>
            <strong>-Ułatwiania Rekrutacji do Zespołów:</strong> Dla zespołów muzycznych nasza aplikacja ma ułatwiać proces rekrutacji nowych członków oraz zarządzanie zespołem. Chcemy, aby zespoły mogły znaleźć idealnych muzyków i menadżerów, co pozwoli na tworzenie jeszcze lepszej muzyki i osiąganie sukcesów.
        </li>
        <li>
            <strong>-Oferowania Narzędzia Dla Pracujących Profesjonalistów:</strong> Dla doświadczonych artystów i menadżerów muzycznych, nasza platforma ma dostarczać narzędzi do promocji, zarządzania projektami i rozwijania się w branży muzycznej.
        </li>
    </ul>
    <p>
        Nasza misja to dążenie do stworzenia innowacyjnej społeczności muzycznej, która inspiruje, wspiera i łączy muzyków, aby wspólnie tworzyć niezapomnianą muzykę oraz rozwijać się w swojej pasji.
    </p>
</section>

      <section className="for-whom">
        <h2>Dla Kogo Jest Nasza Platforma</h2>
        <ul>
          <li>  Młodych Muzyków: Dla tych, którzy rozpoczynają swoją muzyczną podróż i szukają zespołu, wokalisty lub instrumentalisty do wspólnego grania.</li>
          <li>  Doświadczonych Artystów: Dla utalentowanych muzyków, którzy chcą poszerzyć swoje horyzonty artystyczne i dołączyć do projektów o różnych stylach muzycznych.</li>
          <li>  Zespołów Muzycznych: Dla istniejących zespołów, które poszukują nowych członków lub kolaboracyjnych możliwości.</li>
        </ul>
      </section>
      <section className="our-vision">
        <h2>Nasza Wizja</h2>
        <p>
          Naszą wizją jest stworzenie globalnej społeczności muzycznej, gdzie każdy ma szansę znaleźć swoje muzyczne powołanie. Chcemy, aby nasi użytkownicy odkryli nowe dźwięki, nawiązali trwałe przyjaźnie i stworzyli niezapomniane przeżycia muzyczne.
        </p>
      </section>
      <section className="why-choose-us">
        <h2>Dlaczego Wybrać Naszą Platformę</h2>
        <ul>
          <li> - Łatwość Korzystania: Nasza platforma została zaprojektowana tak, aby była łatwa do nawigacji i korzystania, nawet dla początkujących muzyków.</li>
          <li> - Różnorodność Stylów Muzycznych: Oferujemy dostęp do szerokiej gamy stylów muzycznych, dzięki czemu możesz eksperymentować i rozwijać swoje umiejętności.</li>
          <li> - Bezpieczeństwo i Prywatność: Dbamy o bezpieczeństwo i prywatność naszych użytkowników. Twoje dane są u nas chronione.</li>
          <li> - Wsparcie Społeczności: Nasza społeczność muzyków jest gotowa do dzielenia się wiedzą i doświadczeniem, co pomaga w rozwoju artystycznym.</li>
        </ul>
      </section>
      <section className='Gratitude'>
        <p>Dziękujemy, że jesteś częścią BandBlender. Razem tworzymy nowe brzmienia i inspiracje muzyczne. Dołącz do nas już dziś i zacznij swoją muzyczną podróż!</p>
      </section>
    </div>

    )
}

export default About;