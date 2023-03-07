export function AboutSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center px-7 lg:px-52 overflow-hidden">
      <div className="text-white grid gap-4">
        <h4 className="text-[3rem]  font-extrabold">NOSOTROS</h4>
        <p className="text-justify">
          Somos expertos de todas partes del mundo en las tecnologías más
          modernas. Más que trabajadores somos apasionados por la tecnología:
          eso es nuestro principal requerimiento para ser parte de nosotros.
          ¿Por qué? Porque la pasión conduce a aceptar retos que con la
          experiencia nos lleva a crear productos de altísima calidad y de
          proyección global.
        </p>
        <p className="text-justify">
          Puedes contactarnos y con gusto te contaremos más de nosotros, como historias de éxito o anécdotas tech.
        </p>
        <button className="py-3 w-[160px] font-semibold text-xl bg-blue rounded-md">
          Contacto
        </button>
      </div>

      <img className="w-full max-w-[580px]" src="/draw/about.svg" alt="About" />
    </section>
  );
}
