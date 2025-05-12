"use client";

import type React from "react";

import { Map } from "@/components/map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { INFO } from "@/constants/info";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  // Coordenadas para Luanda, Angola (exemplo)
  const mapCenter: [number, number] = [-8.8368, 13.2343];

  return (
    <section id="contato" className="w-full bg-muted py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Estamos ansiosos para recebê-lo no Molasi Food
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-molasi-red" />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8 rounded-2xl bg-card p-6 shadow-lg">
            <h3 className="font-display text-2xl font-semibold">
              Envie-nos uma mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-molasi-red hover:bg-molasi-red/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>

              {isSuccess && (
                <div className="mt-4 rounded-md bg-green-100 p-3 text-center text-green-800 dark:bg-green-900 dark:text-green-100">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 font-display text-2xl font-semibold">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-molasi-red" />
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-muted-foreground">{INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-molasi-red" />
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-muted-foreground">{INFO.phoneNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-molasi-red" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">{INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-molasi-red" />
                  <div>
                    <h4 className="font-semibold">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sábado: 11h às 23h
                    </p>
                    <p className="text-muted-foreground">Domingo: 11h às 16h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 overflow-hidden rounded-xl">
              <Map center={mapCenter} zoom={15} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
