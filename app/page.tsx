import Accordion from "@/components/Accordion";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-200">
      <Navbar />

      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url(http://autismoerealidade.org.br/wp-content/uploads/2019/03/banner-title-perguntas.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 blur-[1px]"></div>
        <div className="flex flex-col items-center justify-center h-[400px] relative z-10">
          <h2 className="text-2xl font-regular tracking-tight text-center sm:text-left">
            Convivendo com o Tea
          </h2>
          <h2 className="text-5xl font-extrabold tracking-tight text-center sm:text-left">
            PERGUNTAS E RESPOSTAS
          </h2>
        </div>
      </section>

      <section className="bg-white p-10">
        <div className="max-w-7xl mx-auto px-44 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-regular text-center tracking-tight text-gray-900 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            consectetur dui, quis tincidunt orci. Suspendisse odio magna, tempor
            id elit vitae, maximus tincidunt sapien. Proin et tellus neque. Sed
            nulla mi, condimentum id ornare et, luctus ut lectus. Nulla vehicula
            maximus quam sit amet rhoncus. Maecenas ac dictum neque.
          </h2>
        </div>
      </section>

      <section className="p-8">
        <Accordion
          title="Teste 1"
          content="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            consectetur dui, quis tincidunt orci. Suspendisse odio magna, tempor
            id elit vitae, maximus tincidunt sapien. Proin et tellus neque. Sed
            nulla mi, condimentum id ornare et, luctus ut lectus. Nulla vehicula
            maximus quam sit amet rhoncus. Maecenas ac dictum neque."
        />

        <Accordion
          title="Teste 2"
          content="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            consectetur dui, quis tincidunt orci. Suspendisse odio magna, tempor
            id elit vitae, maximus tincidunt sapien. Proin et tellus neque. Sed
            nulla mi, condimentum id ornare et, luctus ut lectus. Nulla vehicula
            maximus quam sit amet rhoncus. Maecenas ac dictum neque."
        />

        <Accordion
          title="Teste 3"
          content="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            consectetur dui, quis tincidunt orci. Suspendisse odio magna, tempor
            id elit vitae, maximus tincidunt sapien. Proin et tellus neque. Sed
            nulla mi, condimentum id ornare et, luctus ut lectus. Nulla vehicula
            maximus quam sit amet rhoncus. Maecenas ac dictum neque."
        />

        <Accordion
          title="Teste 4"
          content="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            consectetur dui, quis tincidunt orci. Suspendisse odio magna, tempor
            id elit vitae, maximus tincidunt sapien. Proin et tellus neque. Sed
            nulla mi, condimentum id ornare et, luctus ut lectus. Nulla vehicula
            maximus quam sit amet rhoncus. Maecenas ac dictum neque."
        />
      </section>
    </main>
  );
}
