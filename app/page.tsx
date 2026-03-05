import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* BACKGROUND SHAPES */}

      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>


      {/* NAVBAR */}

      <nav className="navbar">

        <Image
          src="/kavero-logo-transparent.png"
          alt="Kavero"
          width={300}
          height={120}
          className="logo"
        />

        <div className="nav-center">
          <a>Produit</a>
          <a>Fonctionnalités</a>
          <a>Vision</a>
        </div>

        <div className="launch-badge">
          Lancement 2027
        </div>

      </nav>



      {/* HERO */}

      <section className="hero">

        <h1>
          Le système d’exploitation RH
          <br />
          des entreprises modernes
        </h1>

        <p>
          Une plateforme simple pour gérer les équipes,
          le recrutement et les opérations RH.
        </p>

        <span className="launch-big">
          Lancement officiel prévu en 2027
        </span>

      </section>



      {/* FEATURES */}

      <section className="features">

        <h2>Une nouvelle génération de gestion RH</h2>

        <div className="features-grid">

          <div className="card">
            <h3>Gestion des employés</h3>
            <p>
              Centralisez toutes les informations des employés
              dans une plateforme unique et sécurisée.
            </p>
          </div>

          <div className="card">
            <h3>Recrutement intelligent</h3>
            <p>
              Suivez vos candidats et optimisez
              votre processus de recrutement.
            </p>
          </div>

          <div className="card">
            <h3>Gestion du temps</h3>
            <p>
              Gérez les congés, absences et
              disponibilités des équipes.
            </p>
          </div>

          <div className="card">
            <h3>Analytics RH</h3>
            <p>
              Analysez les données RH pour
              améliorer vos décisions.
            </p>
          </div>

        </div>

      </section>



      {/* DASHBOARD */}

      <section className="dashboard-preview">

        <h2>Aperçu de la plateforme Kavero</h2>

        <p>
          Une plateforme RH moderne pour piloter les équipes,
          le recrutement et les opérations RH dans un seul espace.
        </p>

        <div className="dashboard-mockup">


          {/* SIDEBAR */}

          <div className="mock-sidebar">

            <div className="mock-logo"></div>

            <div className="mock-item">Dashboard</div>
            <div className="mock-item">Employés</div>
            <div className="mock-item">Recrutement</div>
            <div className="mock-item">Congés</div>
            <div className="mock-item">Analytics</div>

          </div>



          {/* CONTENT */}

          <div className="mock-content">


            {/* STATS */}

            <div className="mock-cards">

              <div className="mock-card">
                <h4>Employés</h4>
                <span>128</span>
              </div>

              <div className="mock-card">
                <h4>Candidats</h4>
                <span>24</span>
              </div>

              <div className="mock-card">
                <h4>Demandes de congé</h4>
                <span>12</span>
              </div>

            </div>



            {/* GRAPH */}

            <div className="mock-chart">

              <div className="chart-bar bar1"></div>
              <div className="chart-bar bar2"></div>
              <div className="chart-bar bar3"></div>
              <div className="chart-bar bar4"></div>
              <div className="chart-bar bar5"></div>

            </div>



            {/* TABLE */}

            <div className="mock-table">

              <div className="table-row header">
                <span>Nom</span>
                <span>Poste</span>
                <span>Département</span>
                <span>Status</span>
              </div>

              <div className="table-row">
                <span>Sophie Martin</span>
                <span>HR Manager</span>
                <span>People</span>
                <span className="status">Actif</span>
              </div>

              <div className="table-row">
                <span>Lucas Bernard</span>
                <span>Recruiter</span>
                <span>Talent</span>
                <span className="status">Actif</span>
              </div>

              <div className="table-row">
                <span>Emma Dubois</span>
                <span>HR Analyst</span>
                <span>People</span>
                <span className="status">Actif</span>
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 Kavero — Lancement officiel prévu en 2027
        </p>

      </footer>

    </main>
  );
}
