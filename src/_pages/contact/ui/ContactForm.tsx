"use client";

import { useCallback, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Check, Send, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import {
  contactFormDefaultValues,
  contactMarketOptions,
  getContactFieldError,
  type ContactSubmissionPhase,
  validateContactCompany,
  validateContactEmail,
  validateContactMarket,
  validateContactMessage,
  validateContactName,
  waitForFakeTransmission,
} from "../model/contact-form";
import {
  contactControlStyles,
  contactErrorStyles,
  contactFieldStyles,
  contactFormAccentStyles,
  contactFormFooterStyles,
  contactFormHeadingStyles,
  contactFormIntroStyles,
  contactFormPanelStyles,
  contactFormRowStyles,
  contactFormStyles,
  contactLabelStyles,
  contactRequiredStyles,
  contactSubmitIconStyles,
  contactSubmitStyles,
  launchParticleStyles,
  successIconStyles,
  successIconWrapStyles,
  successInnerStyles,
  successMessageStyles,
  successStageStyles,
  successTitleStyles,
  transmissionCapsuleLineStyles,
  transmissionCapsuleStyles,
  transmissionCapsuleTopStyles,
  transmissionCopyStyles,
  transmissionEyebrowStyles,
  transmissionOrbitStyles,
  transmissionStageStyles,
  transmissionStarIconStyles,
  transmissionStarStyles,
  transmissionTitleStyles,
} from "./ContactFormStyles";

const launchParticles = ["a", "b", "c", "d", "e", "f"] as const;

export function ContactForm() {
  const [phase, setPhase] = useState<ContactSubmissionPhase>("idle");
  const [senderName, setSenderName] = useState("");
  const reducedMotion = useReducedMotion();

  const focusSuccessHeading = useCallback((heading: HTMLHeadingElement | null) => {
    heading?.focus();
  }, []);

  const form = useForm({
    defaultValues: contactFormDefaultValues,
    onSubmitInvalid: () => {
      window.requestAnimationFrame(() => {
        const firstInvalidField = document.querySelector<HTMLElement>(
          '#contact-form [aria-invalid="true"]',
        );
        firstInvalidField?.focus();
      });
    },
    onSubmit: async ({ value }) => {
      setSenderName(value.name.trim());
      setPhase("launching");
      await waitForFakeTransmission(reducedMotion ? 420 : 2850);
      setPhase("success");
    },
  });

  return (
    <div className={contactFormPanelStyles()}>
      <div aria-hidden="true" className={contactFormAccentStyles()} />

      <AnimatePresence mode="wait" initial={false}>
        {phase === "idle" ? (
          <motion.form
            key="contact-form"
            id="contact-form"
            noValidate
            className={contactFormStyles()}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.975 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.45 }}
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();
              void form.handleSubmit();
            }}
          >
            <div className={contactFormIntroStyles()}>
              <h2 className={contactFormHeadingStyles()}>Start the conversation.</h2>
              {/* <span className={contactFormStepStyles()}>01 — 05</span> */}
            </div>

            <div className={contactFormRowStyles()}>
              <form.Field
                name="name"
                validators={{
                  onBlur: ({ value }) => validateContactName(value),
                  onSubmit: ({ value }) => validateContactName(value),
                }}
              >
                {(field) => {
                  const error = getContactFieldError(field.state.meta.errors);
                  const invalid = Boolean(error);

                  return (
                    <div className={contactFieldStyles()}>
                      <label htmlFor={field.name} className={contactLabelStyles()}>
                        Your name
                        <span className={contactRequiredStyles()}>Required</span>
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type="text"
                        autoComplete="name"
                        placeholder="Alex Morgan"
                        value={field.state.value}
                        aria-invalid={invalid}
                        aria-describedby={invalid ? `${field.name}-error` : undefined}
                        className={contactControlStyles({ invalid, kind: "input" })}
                        onBlur={field.handleBlur}
                        onChange={(event) => field.handleChange(event.target.value)}
                      />
                      <span id={`${field.name}-error`} role="alert" className={contactErrorStyles()}>
                        {error ?? ""}
                      </span>
                    </div>
                  );
                }}
              </form.Field>

              <form.Field
                name="email"
                validators={{
                  onBlur: ({ value }) => validateContactEmail(value),
                  onSubmit: ({ value }) => validateContactEmail(value),
                }}
              >
                {(field) => {
                  const error = getContactFieldError(field.state.meta.errors);
                  const invalid = Boolean(error);

                  return (
                    <div className={contactFieldStyles()}>
                      <label htmlFor={field.name} className={contactLabelStyles()}>
                        Work email
                        <span className={contactRequiredStyles()}>Required</span>
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="alex@company.com"
                        value={field.state.value}
                        aria-invalid={invalid}
                        aria-describedby={invalid ? `${field.name}-error` : undefined}
                        className={contactControlStyles({ invalid, kind: "input" })}
                        onBlur={field.handleBlur}
                        onChange={(event) => field.handleChange(event.target.value)}
                      />
                      <span id={`${field.name}-error`} role="alert" className={contactErrorStyles()}>
                        {error ?? ""}
                      </span>
                    </div>
                  );
                }}
              </form.Field>
            </div>

            <div className={contactFormRowStyles()}>
              <form.Field
                name="company"
                validators={{
                  onBlur: ({ value }) => validateContactCompany(value),
                  onSubmit: ({ value }) => validateContactCompany(value),
                }}
              >
                {(field) => {
                  const error = getContactFieldError(field.state.meta.errors);
                  const invalid = Boolean(error);

                  return (
                    <div className={contactFieldStyles()}>
                      <label htmlFor={field.name} className={contactLabelStyles()}>
                        Company
                        <span className={contactRequiredStyles()}>Required</span>
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type="text"
                        autoComplete="organization"
                        placeholder="Company name"
                        value={field.state.value}
                        aria-invalid={invalid}
                        aria-describedby={invalid ? `${field.name}-error` : undefined}
                        className={contactControlStyles({ invalid, kind: "input" })}
                        onBlur={field.handleBlur}
                        onChange={(event) => field.handleChange(event.target.value)}
                      />
                      <span id={`${field.name}-error`} role="alert" className={contactErrorStyles()}>
                        {error ?? ""}
                      </span>
                    </div>
                  );
                }}
              </form.Field>

              <form.Field
                name="market"
                validators={{
                  onBlur: ({ value }) => validateContactMarket(value),
                  onSubmit: ({ value }) => validateContactMarket(value),
                }}
              >
                {(field) => {
                  const error = getContactFieldError(field.state.meta.errors);
                  const invalid = Boolean(error);

                  return (
                    <div className={contactFieldStyles()}>
                      <label htmlFor={field.name} className={contactLabelStyles()}>
                        Priority market
                        <span className={contactRequiredStyles()}>Required</span>
                      </label>
                      <Select
                        name={field.name}
                        value={field.state.value}
                        onValueChange={field.handleChange}
                      >
                        <SelectTrigger
                          id={field.name}
                          aria-invalid={invalid}
                          aria-describedby={invalid ? `${field.name}-error` : undefined}
                          aria-required="true"
                          onBlur={field.handleBlur}
                        >
                          <SelectValue placeholder="Select a region" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactMarketOptions.map((market) => (
                            <SelectItem key={market} value={market}>
                              {market}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span id={`${field.name}-error`} role="alert" className={contactErrorStyles()}>
                        {error ?? ""}
                      </span>
                    </div>
                  );
                }}
              </form.Field>
            </div>

            <form.Field
              name="message"
              validators={{
                onBlur: ({ value }) => validateContactMessage(value),
                onSubmit: ({ value }) => validateContactMessage(value),
              }}
            >
              {(field) => {
                const error = getContactFieldError(field.state.meta.errors);
                const invalid = Boolean(error);

                return (
                  <div className={contactFieldStyles()}>
                    <label htmlFor={field.name} className={contactLabelStyles()}>
                      Your ambition
                      <span className={contactRequiredStyles()}>Required</span>
                    </label>
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      placeholder="Where do you want to grow, and what needs to happen next?"
                      value={field.state.value}
                      aria-invalid={invalid}
                      aria-describedby={invalid ? `${field.name}-error` : undefined}
                      className={contactControlStyles({ invalid, kind: "textarea" })}
                      onBlur={field.handleBlur}
                      onChange={(event) => field.handleChange(event.target.value)}
                    />
                    <span id={`${field.name}-error`} role="alert" className={contactErrorStyles()}>
                      {error ?? ""}
                    </span>
                  </div>
                );
              }}
            </form.Field>

            <div className={contactFormFooterStyles()}>
              {/* <p className={contactPrivacyStyles()}>
                Demo form — your details remain in this browser and are not transmitted.
              </p> */}
              <form.Subscribe selector={(state) => state.isSubmitting}>
                {(isSubmitting) => (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={contactSubmitStyles()}
                  >
                    {isSubmitting ? "Preparing launch" : "Send enquiry"}
                    <Send
                      aria-hidden="true"
                      className={contactSubmitIconStyles()}
                      strokeWidth={1.5}
                    />
                  </button>
                )}
              </form.Subscribe>
            </div>
          </motion.form>
        ) : null}

        {phase === "launching" ? (
          <motion.div
            key="launching"
            role="status"
            aria-live="polite"
            className={transmissionStageStyles()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: reducedMotion ? 1 : 1.03 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.35 }}
          >
            <motion.div
              aria-hidden="true"
              className={transmissionOrbitStyles({ size: "outer" })}
              animate={reducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              aria-hidden="true"
              className={transmissionOrbitStyles({ size: "middle" })}
              animate={reducedMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            />
            <div aria-hidden="true" className={transmissionOrbitStyles({ size: "inner" })} />

            {launchParticles.map((particle, index) => (
              <motion.span
                key={particle}
                aria-hidden="true"
                className={launchParticleStyles({ position: particle })}
                animate={
                  reducedMotion
                    ? { opacity: 0.55 }
                    : { opacity: [0.18, 1, 0.18], scale: [0.7, 1.6, 0.7] }
                }
                transition={{
                  duration: 1.25 + index * 0.12,
                  delay: index * 0.08,
                  repeat: Infinity,
                }}
              />
            ))}

            <motion.div
              aria-hidden="true"
              className={transmissionStarStyles()}
              animate={reducedMotion ? undefined : { scale: [0.86, 1.1, 0.86] }}
              transition={{ duration: 1.1, repeat: Infinity }}
            >
              <Sparkles className={transmissionStarIconStyles()} strokeWidth={1.6} />
            </motion.div>

            <motion.div
              aria-hidden="true"
              className={transmissionCapsuleStyles()}
              initial={{ y: 112, opacity: 0, scale: 1, rotate: -2 }}
              animate={
                reducedMotion
                  ? { y: 0, opacity: [0, 1, 0], scale: [0.96, 1, 0.9] }
                  : {
                      y: [112, 28, -20, -150],
                      opacity: [0, 1, 1, 0],
                      scale: [1, 0.9, 0.32, 0.02],
                      rotate: [-2, 0, 7, 18],
                    }
              }
              transition={{
                duration: reducedMotion ? 0.36 : 1.6,
                ease: [0.22, 1, 0.36, 1],
                times: reducedMotion ? [0, 0.5, 1] : [0, 0.28, 0.72, 1],
              }}
            >
              <div className={transmissionCapsuleTopStyles()}>
                Enquiry packet
                <Send size={11} strokeWidth={1.5} />
              </div>
              <div className={transmissionCapsuleLineStyles()} />
            </motion.div>

            <div className={transmissionCopyStyles()}>
              <p className={transmissionEyebrowStyles()}>Transmission in motion</p>
              <p className={transmissionTitleStyles()}>Plotting your coordinates…</p>
            </div>
          </motion.div>
        ) : null}

        {phase === "success" ? (
          <motion.div
            key="success"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className={successStageStyles()}
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={successInnerStyles()}>
              <motion.div
                aria-hidden="true"
                className={successIconWrapStyles()}
                initial={{ scale: 0.65, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: reducedMotion ? 0 : 0.15, duration: 0.45 }}
              >
                <Check className={successIconStyles()} strokeWidth={1.5} />
              </motion.div>
              <h2 ref={focusSuccessHeading} tabIndex={-1} className={successTitleStyles()}>
                Coordinates received.
              </h2>
              <p className={successMessageStyles()}>
                Thank you{senderName ? `, ${senderName}` : ""}. Your route is now on the map.
              </p>
              {/* <p className={successDemoNoteStyles()}>
                Prototype confirmation only — no form data was sent or stored.
              </p> */}
              {/* <button type="button" className={successResetStyles()} onClick={resetForm}>
                <RotateCcw
                  aria-hidden="true"
                  className={successResetIconStyles()}
                  strokeWidth={1.5}
                />
                Start another transmission
              </button> */}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
