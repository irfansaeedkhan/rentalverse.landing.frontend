"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "./ui/button";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  phone: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d+$/, "Phone number must contain only digits"),
  message: yup.string().required("Message is required"),
});

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue(
      "fullName",
      (document.getElementById("fullName") as HTMLInputElement)?.value || ""
    );
    setValue(
      "email",
      (document.getElementById("email") as HTMLInputElement)?.value || ""
    );
    setValue(
      "phone",
      (document.getElementById("phone") as HTMLInputElement)?.value || ""
    );
    setValue(
      "message",
      (document.getElementById("message") as HTMLTextAreaElement)?.value || ""
    );
  }, [setValue]);

  const toastSuccessOptions: ToastOptions = {
    position: "top-right",
    autoClose: 1000,
    style: {
      background: "#05121e",
      color: "#fff",
    },
  };

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Your message has been sent!", toastSuccessOptions);
        reset(); // Reset the form after success
      } else {
        toast.error("There was an error sending your message", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "There was an error submitting your form. Please try again.",
        {
          position: "top-right",
          autoClose: 2000,
        }
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-[100dvh] py-10 flex items-center justify-center"
    >
      <div className="bg-[url('/assets/images/contact-bg.webp')] bg-lightgray bg-cover bg-center bg-no-repeat mix-blend-hard-light absolute inset-0 h-full"></div>
      <div className="relative z-10 h-full w-full">
        <div className="max-container w-full relative flex  h-full justify-center  items-center">
          <div className="flex flex-col maxmobile:items-center md:flex-row w-full items-start gap-16 sm:gap-[10%]">
            <div className=" flex items-center gap-5">
              <div className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">
                <h2 className="h2 text-gradient md:max-w-[11ch]">Contact Us</h2>
                <h3 className="h4 py-6 max-w-[26ch]">
                  Get in Touch <br /> We&apos;re Here to Help
                </h3>
                <div className="h6 flex flex-col maxmobile:items-center gap-3 max-w-[43ch]">
                  <p>
                    Have questions or need more information about RentalVerse?
                  </p>
                  <p>
                    Our team is here to assist you. Reach out to us through the
                    form below, and we&apos;ll get back to you as soon as
                    possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:flex-1 text-sm flex flex-col justify-center items-center gap-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
                className="w-full"
              >
                <div className="group w-full flex flex-col gap-6 sm:gap-5">
                  <div className="relative flex items-center rounded-full w-full">
                    <input
                      {...register("fullName")}
                      type="text"
                      className="peer relative w-full bg-primary pl-12 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:primary focus:ring-2 focus:ring-primary focus:drop-shadow-lg py-5 rounded-full"
                      placeholder="Your Full Name"
                    />
                    <span className="material-symbols-outlined absolute left-4 transition-all duration-200 ease-in-out group-focus-within:text-primary">
                      <Image
                        src="/assets/icons/profile.svg"
                        alt="about image"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </span>
                    {errors.fullName && (
                      <p className="text-red-500 text-xs absolute bottom-[-20px] left-4">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div className="relative flex items-center rounded-full w-full">
                    <input
                      {...register("email")}
                      type="text"
                      className="peer relative w-full bg-primary pl-12 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:primary focus:ring-2 focus:ring-primary focus:drop-shadow-lg py-5 rounded-full"
                      placeholder="Your Email Address"
                    />
                    <span className="material-symbols-outlined absolute left-4 transition-all duration-200 ease-in-out group-focus-within:text-primary">
                      <Image
                        src="/assets/icons/email.svg"
                        alt="about image"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </span>
                    {errors.email && (
                      <p className="text-red-500 text-xs absolute bottom-[-20px] left-4">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="relative flex items-center rounded-full w-full">
                    <input
                      {...register("phone")}
                      type="text"
                      className="peer relative w-full bg-primary pl-12 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:primary focus:ring-2 focus:ring-primary focus:drop-shadow-lg py-5 rounded-full"
                      placeholder="Your Phone Number"
                    />
                    <span className="material-symbols-outlined absolute left-4 transition-all duration-200 ease-in-out group-focus-within:text-primary">
                      <Image
                        src="/assets/icons/phone.svg"
                        alt="about image"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </span>
                    {errors.phone && (
                      <p className="text-red-500 text-xs absolute bottom-[-20px] left-4">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="relative flex items-center rounded-full w-full">
                    <input
                      {...register("message")}
                      type="text"
                      className="peer relative w-full bg-primary pl-12 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:primary focus:ring-2 focus:ring-primary focus:drop-shadow-lg py-5 rounded-full"
                      placeholder="Your Message"
                    />
                    <span className="material-symbols-outlined absolute left-4 transition-all duration-200 ease-in-out group-focus-within:text-primary">
                      <Image
                        src="/assets/icons/comment.svg"
                        alt="about image"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </span>
                    {errors.message && (
                      <p className="text-red-500 text-xs absolute bottom-[-20px] left-4">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="secondary"
                    className="text-xs md:text-xl py-2 px-4 md:py-4 md:px-10 w-[50%] self-center sm:self-end"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactUs;
