"use client";
import styles from "./contact.module.css";
import Animations from "@/app/ScrollingAnimation/animations.json";
import { RiSendPlaneFill, RiLoader2Fill } from "react-icons/ri";
import { useForm, Controller } from "react-hook-form";
import { handleSendMessage } from "./services/sendMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "./PhoneInput";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required("Preencha com seu nome!"),
  mail: yup.string().required("Preencha com seu e-mail!"),
  phone: yup.string().required("Preencha com seu telefone!"),
  message: yup.string().required("Escreva uma mensagem objetiva!"),
});

function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
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
          onSubmit={handleSubmit((data) => {
            handleSendMessage(data, setLoading);
            reset({
              name: "",
              mail: "",
              phone: "",
              message: "",
            });
          })}
        >
          <h2>Entre em contato!</h2>
          <p>
            Gostou do meu trabalho e gostaria de entrar em contato? Utilize o
            formulário abaixo ou me chame no{" "}
            <a
              href="https://api.whatsapp.com/send?phone=5531992547014"
              target="_blank"
            >
              WhatsApp
            </a>
            .
          </p>
          <label for="input_name">Nome *</label>
          <input id="input_name" {...register("name")} />
          <span className={styles.errorMessage}>{errors.name?.message}</span>
          <label for="input_mail">E-mail *</label>
          <input id="input_mail" {...register("mail")} />
          <span className={styles.errorMessage}>{errors.mail?.message}</span>
          <label for="phone_input">Telefone *</label>
          <Controller
            defaultValue=""
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput setValue={setValue} {...field} />
            )}
          />
          <span className={styles.errorMessage}>{errors.phone?.message}</span>
          <label for="input_message">Mensagem *</label>
          <textarea
            id="input_message"
            rows={5}
            {...register("message")}
          ></textarea>
          <span className={styles.errorMessage}>{errors.message?.message}</span>
          <button type="submit" disabled={loading}>
            {loading && (
              <div className={styles.loadingIcon}>
                <RiLoader2Fill />
              </div>
            )}
            {!loading && (
              <>
                <RiSendPlaneFill /> Enviar mensagem
              </>
            )}
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
