import Accordion from "@/components/Accordion";
import Navbar from "@/components/Navbar";
import { QuemSomos } from "@/components/QuemSomos";
import { accordionData } from "@/utils/accordion";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-200">
      <Navbar />

      <section className="" id="convivendo-tea">
        <div
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage: "/public/banner.png",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 blur-[1px]"></div>
          <div className="flex flex-col items-center justify-center h-[400px] relative z-10">
            <h2 className="text-2xl font-medium tracking-tight text-center sm:text-left ">
              Práticas Integrativas e Complementares no Tratamento do Autista
            </h2>
            <span className="border-b-2 border-blue-600 pb-4 px-44"></span>
            <h2 className="text-4xl font-extrabold tracking-tight text-center sm:text-left mt-2">
              PERGUNTAS E RESPOSTAS
            </h2>
          </div>
        </div>

        <div className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-regular text-center tracking-tight text-gray-900 leading-8 ">
              Abaixo reunimos algumas das perguntas mais frequentes que
              recebemos sobre o transtorno do espectro autista.
            </h2>
          </div>
        </div>
      </section>

      <section className="p-8 md:px-80 min-h-screen">
        {accordionData.map((item) => (
          <Accordion
            key={item.key}
            title={`${item.key}. ${item.title}`}
            content={item.content}
          />
        ))}
      </section>

      <section className="bg-white" id="quem-somos">
        <QuemSomos />
      </section>
    </main>
  );
}
