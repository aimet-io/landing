import { useRouter } from "next/router";

export function HeroSection() {
  const { push } = useRouter();
  return (
    <section className="flex justify-center items-center gap-10 my-13 flex-wrap px-7 md:flex-nowrap md:px-12">
      <div className="text-white flex flex-col gap-3">
        <h1 className="text-[3rem] md:text-[3rem] lg:text-[5rem] font-extrabold">
          Aimet Solutions
        </h1>
        <p className="max-w-full">
          Desarrollamos todo tipo de software (ERP, CRM, CMS, Landing, etc) a
          cualquier escala. Todo proyecto es único y debe ser analizado a
          medida.
        </p>
        <p>Cótiza con nosotros de forma gratuita.</p>

        <button
          className="p-3 bg-blue rounded-[30px] w-[12rem] text-[1.25rem]"
          onClick={() => push("/project-builder")}
        >
          ¡Cotiza ya!
        </button>
      </div>
      <img
        src="/img/working_group.png"
        className="md:w-5/12"
        alt="Working Group"
      />
    </section>
  );
}
