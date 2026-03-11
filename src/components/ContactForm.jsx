import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../helpers/contactSchema";

import Feedback from "./Feedback";
import Button from "./Button";
import FormColumn from "./FormColumn";
import FormField from "./FormField";
import OptionGroup from "./OptionGroup";

import styles from "./ContactForm.module.css";
import { useState } from "react";

function ContactForm() {
  // Form state tracks which view to render: 'idle' shows the form, 'success' or 'error' show feedback.
  const [formStatus, setFormStatus] = useState("idle");

  // helper used by the feedback retry button below.
  // we intentionally *don't* call reset here so values stay in the
  // form; users can correct mistakes without retyping everything.
  function handleRetry() {
    // drop any validation messages so the user starts with a clean form
    clearErrors();
    setFormStatus("idle");
  }

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      phone: "",
      email: "",
      residence: "",
      bedrooms: "",
      bathrooms: "",
      rooms: [],
      frequency: "",
      service: [],
      propertySize: "",
      paymentMethod: "",
    },
  });

  async function onSubmit(data) {
    try {
      const response = await fetch("https://formspree.io/f/maqdvbbe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      if (response.ok) {
        reset();
        setFormStatus("success");
      }
      console.log(response);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
    console.log(data);
  }

  return (
    <div className={`restrictContent`}>
      {formStatus === "idle" && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.form} ${styles.grid} ${styles.grid2Cols}`}
        >
          {/* Column 1 */}

          <FormColumn title="Contact Details">
            <FormField label="Full Name" id="fullName">
              <input
                {...register("fullName")}
                id="fullName"
                type="text"
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className={`${styles.error}`}>{errors.fullName.message}</p>
              )}
            </FormField>

            <FormField label="Address" id="address">
              <input {...register("address")} id="address" type="text" />
              {errors.address && (
                <p className={`${styles.error}`}>{errors.address.message}</p>
              )}
            </FormField>

            <FormField label="City (with ZIP)" id="city">
              <input {...register("city")} id="city" type="number" />
              {errors.city && (
                <p className={`${styles.error}`}>{errors.city.message}</p>
              )}
            </FormField>

            <FormField label="Phone" id="phone">
              <input {...register("phone")} id="phone" type="number" />
              {errors.phone && (
                <p className={`${styles.error}`}>{errors.phone.message}</p>
              )}
            </FormField>

            <FormField label="Email" id="email">
              <input
                {...register("email", { required: "Email is required" })}
                id="email"
                type="text"
                placeholder="johndoe@email.com"
              />
              {errors.email && (
                <p className={`${styles.error}`}>{errors.email.message}</p>
              )}
            </FormField>
          </FormColumn>

          {/* Column 2 */}

          <FormColumn title="Home Environment Details">
            <FormField label="Type of Residence" id="residence">
              <select
                {...register("residence", {
                  required: "Please select residence type.",
                })}
                className={`${styles.selectInput}`}
                id="residence"
              >
                <option value="">Select</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
              </select>
              {errors.residence && (
                <p className={`${styles.error}`}>{errors.residence.message}</p>
              )}
            </FormField>

            <FormField label="Number of Bedrooms" id="bedrooms">
              <input
                {...register("bedrooms")}
                className={`${styles.numberInput}`}
                id="bedrooms"
                type="number"
              />
              {errors.bedrooms && (
                <p className={`${styles.error}`}>{errors.bedrooms.message}</p>
              )}
            </FormField>

            <FormField label="Number of Bathrooms" id="bathrooms">
              <input
                {...register("bathrooms")}
                className={`${styles.numberInput}`}
                id="bathrooms"
                type="number"
              />
              {errors.bathrooms && (
                <p className={`${styles.error}`}>{errors.bathrooms.message}</p>
              )}
            </FormField>

            <OptionGroup
              legend="Additional Rooms"
              name="rooms"
              options={[
                "Kitchen",
                "Living Room",
                "Dining Room",
                "All of the above",
              ]}
              register={register}
              rules={{ required: "Please select room/s" }}
              error={errors.rooms}
            />
          </FormColumn>

          {/* Column 3 */}
          <FormColumn title="Cleaning Details">
            <OptionGroup
              legend="Cleaning Frequency"
              name="frequency"
              type="radio"
              options={["Weekly", "Bi-weekly", "Monthly", "One Time"]}
              register={register}
              error={errors.frequency}
            />

            <OptionGroup
              legend="Additional Services"
              name="service"
              options={[
                "Deep Cleaning",
                "Move in Cleaning",
                "Move out Cleaning",
                "Stairway Shampoo",
              ]}
              register={register}
              error={errors.service}
            />

            <FormField label="Property Size (sq ft)" id="propertySize">
              <input
                {...register("propertySize")}
                className={`${styles.numberInput}`}
                id="size"
                type="number"
              />
              {errors.propertySize && (
                <p className={`${styles.error}`}>
                  {errors.propertySize.message}
                </p>
              )}
            </FormField>

            <OptionGroup
              legend="Payment Method"
              name="paymentMethod"
              type="radio"
              options={["Cash", "Zelle", "Cash App"]}
              register={register}
              error={errors.paymentMethod}
            />

            <div className={`${styles.btnWrapper}`}>
              <Button
                onClick={() => reset()}
                htmlType="reset"
                variant="resetBtn"
                className={`${styles.submitBtn}`}
              >
                Clear
              </Button>
              <Button
                htmlType="submit"
                className={styles.submitBtn}
                variant="primary"
                isSubmitting={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Submit"}
              </Button>
            </div>
          </FormColumn>
        </form>
      )}
      {formStatus === "success" && (
        <Feedback
          type="success"
          heading="Thank you!"
          message="Your form has been submitted successfully."
        />
      )}
      {formStatus === "error" && (
        <Feedback
          type="error"
          heading="Error!"
          message="There was an error submitting your form. Please try again."
          onRetry={handleRetry}
        />
      )}
    </div>
  );
}

export default ContactForm;
