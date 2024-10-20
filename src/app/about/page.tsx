import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Om oss</h1>
        <div className="space-y-8">
          <section className="flex flex-col md:flex-row items-center">
            <div>
              <p>
                Sikkerhet på IFI (SIFI) er linjeforeningen for
                informasjonsikkerhet ved Universitetet i Oslo
              </p>
            </div>
          </section>
          <section className="flex flex-col items-center">
            <div className="items-center">
              <h2 className="text-2xl font-semibold mb-2">Hovedstyret</h2>
              <p className="py-4">
                SIFI sitt hovedstyre består av:
                <li>Leder: Karishma Sharma</li>
                <li>Nestleder: Vetle Bergstad</li>
                <li>Økonomiansvarlig: Magnus Dhelie</li>
                <li>Bedriftskontakt: Pavel Blindheim</li>
                <li>PR: Karin Pettersen</li>
                <li>Arrangementansvarlig: Pawel Rodziewicz</li>
                <li>Styremedlem: Adrian Skansen</li>
                <li>Styremedlem: Pernille Vannebo</li>
                <li>Styremedlem: Tobias With Thorsen</li>
              </p>
            </div>
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Image
                src="/images/logo_liten_utenbak_white.png"
                alt="Our Team"
                width={100}
                height={50}
                className="w-full md:w-48 rounded-lg shadow-lg"
              ></Image>
            </div>
          </section>
          <section className="flex flex-col md:flex-row items-center">
            <div className="items-center">
              <h2 className="text-2xl font-semibold mb-2 items-center">
                Interne
              </h2>
              <p className="items-center">
                Uten om hovedstyret, har SIFI opptil 15 frivillige studenter som
                er det vi kaller for interne. De støtter hovedstyret med
                arrangementer og andre oppgaver. Takk til alle interne!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
