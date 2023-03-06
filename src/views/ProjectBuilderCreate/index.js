import React from "react";
import classes from "./styles.module.css";

export const ProjectBuilderCreateView = () => {
  return (
    <section className="flex justify-center">
      <form className="text-white flex flex-col max-w-[500px]">
        <h1 className="text-3xl text-center mb-2">Coméntanos tu proyecto</h1>

        <section className={classes.section}>
          <div className={classes.group}>
            <label htmlFor="" className={classes.label}>
              Nombre del proyecto
            </label>
            <input type="text" className={classes.input} />
          </div>

          <div className={classes.group}>
            <label htmlFor="" className={classes.label}>
              Tipo de proyecto
            </label>
            <input type="text" className={classes.input} />
          </div>
        </section>

        <section className={classes.section}>
          <div className={classes.group}>
            <label htmlFor="" className={classes.label}>
              Encargado
            </label>
            <input type="text" className={classes.input} />
          </div>

          <div className={classes.group}>
            <label htmlFor="" className={classes.label}>
              Contacto (tel o correo)
            </label>
            <input type="text" className={classes.input} />
          </div>
        </section>

        <div className={classes.group}>
          <label htmlFor="" className={classes.label}>
            Description
          </label>
          <textarea className={classes.input}></textarea>
        </div>
        <div className={classes.group}>
          <label htmlFor="" className={classes.label}>
            Features
          </label>
          <input type="text" className={classes.input} />
          <button className={classes.btnAdd}>Añadir</button>
        </div>

        <div className={classes.group}>
          <label htmlFor="" className={classes.label}>
            Adjuntar imágenes
          </label>
          <input type="file" />
        </div>

        <button className={classes.btnSubmit}>Cotizar Proyecto</button>
      </form>
    </section>
  );
};
