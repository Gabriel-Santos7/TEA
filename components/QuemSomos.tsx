import { teamMembers } from "@/utils/teamMembers";
import Head from "next/head";

export const QuemSomos = () => {
  return (
    <div className="flex flex-col items-center text-black min-h-screen">
      <Head>
        <title>Quem Somos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center px-14 ">
        <h1 className="text-4xl font-bold mt-10 text-blue-600">Quem Somos</h1>

        <p className="mt-3 text-2xl text-center">
          Somos estudantes de enfermagem na ETEC Doutora Ruth Cardoso e estamos
          pesquisando práticas integrativas e complementares para melhorar o
          tratamento do autismo. Nosso TCC busca enriquecer o conhecimento sobre
          terapias alternativas e seu papel no cuidado de pessoas com TEA.
          Estamos comprometidos em promover abordagens de tratamento mais
          inclusivas e eficazes.
        </p>

        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold">Nossa Equipe</h2>
          {teamMembers.map((member, index) => (
            <div key={index} className="mt-4 mb-2">
              <h3 className="text-2xl">{member.name}</h3>
              {/* <p>{member.role}</p> */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
