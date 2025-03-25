import PdfPreview from '../components/PdfReview';

const Siifra = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Varsling i SIFI</h1>
        <div className="space-y-8">
          <section className="flex flex-col items-center">
            <div className="items-center">
              I SIFI ønsker vi å ivareta alle studenter ved vår linjeforening.
              Dersom du opplever noe upassende kan du kontakte leder eller
              nestleder av SIFI. Under kan du se en varslingsplakat med mer
              utfyllende informasjon.
            </div>
            <PdfPreview pdfUrl="Varslingsplakat_sifi.pdf"></PdfPreview>
          </section>
          <section className="flex flex-col items-center">
            <div className="items-center">
              <h2 className="text-2xl font-semibold mb-2">
                Etiske retningslinjer
              </h2>
              <PdfPreview pdfUrl="Etiske_retningslinjer_for_SIFI.pdf"></PdfPreview>
            </div>
          </section>
          <section className="flex flex-col md:flex-row items-center">
            <div className="items-center"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Siifra;
