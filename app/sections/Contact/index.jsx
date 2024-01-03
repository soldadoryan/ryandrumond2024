"use client";
import styles from "./contact.module.css";
import Animations from "@/app/ScrollingAnimation/animations.json";
import { RiSendPlaneFill } from "react-icons/ri";
import { useForm, Controller } from "react-hook-form";
import { handleSendMessage } from "./services/sendMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "./PhoneInput";

const schema = yup.object({
  name: yup.string().required("Preencha com seu nome!"),
  mail: yup.string().required("Preencha com seu e-mail!"),
  phone: yup.string().required("Preencha com seu telefone!"),
  message: yup.string().required("Escreva uma mensagem objetiva!"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div
        className={styles.backdropContact}
        {...Animations.backdropContact}
      ></div>
      <section className={styles.contact} {...Animations.contact}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <h2>Entre em contato!</h2>
          <p>
            Gostou do meu trabalho e gostaria de entrar em contato? Utilize o
            formulário abaixo:
          </p>
          <label>Nome *</label>
          <input {...register("name")} />
          <span className={styles.errorMessage}>{errors.name?.message}</span>
          <label>E-mail *</label>
          <input {...register("mail")} />
          <span className={styles.errorMessage}>{errors.mail?.message}</span>
          <label>Telefone *</label>
          <Controller
            defaultValue=""
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput setValue={setValue} {...field} />
            )}
          />
          <span className={styles.errorMessage}>{errors.phone?.message}</span>
          <label>Mensagem *</label>
          <textarea rows={5} {...register("message")}></textarea>
          <span className={styles.errorMessage}>{errors.message?.message}</span>
          <button type="submit">
            <RiSendPlaneFill /> Enviar mensagem
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
