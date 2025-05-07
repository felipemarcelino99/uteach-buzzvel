"use client";

import Button from "../Button";

export default function Form({}) {
  return (
    <form
      action=""
      method="post"
      className="max-w-[550px] w-full"
      id="fRequest"
      onSubmit={() => alert("Form submited")}
    >
      <fieldset className="flex flex-col gap-5">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
          className="form-input"
          required
        />
      </fieldset>
      <fieldset className="flex flex-col gap-5">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="What are you say ?"
          className="form-input"
          required
        ></textarea>
      </fieldset>
      <fieldset className="flex items-center justify-center !mt-8">
        <Button type="submit" label="Request Demo" variant="black" />
      </fieldset>
    </form>
  );
}
