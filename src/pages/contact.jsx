import Input from "antd/es/input/Input";
import React from "react";
import { PageLayout } from "../common/layouts/PageLayout";

function FormInput({ label = "", children }) {
  return (
    <div className="grid gap-1 text-gray-200 text-lg">
      <label>{label}</label>

      {children}
    </div>
  );
}

const ContactPage = () => {
  return (
    <PageLayout className="flex flex-col items-center">
      <section className="max-w-full w-[600px] mt-10 grid gap-5 p-2 sm:p-5">
        <FormInput label="Name">
          <Input className="px-4 py-2 text-lg font-medium" placeholder="Name" />
        </FormInput>

        <FormInput label="Email">
          <Input
            className="px-4 py-2 text-lg font-medium"
            placeholder="Email"
          />
        </FormInput>

        <FormInput label="LinkedIn">
          <Input
            className="px-4 py-2 text-lg font-medium"
            placeholder="LinkedIn URL"
          />
        </FormInput>

        <FormInput label="Instagram">
          <Input
            className="px-4 py-2 text-lg font-medium"
            placeholder="Instagram URL"
          />
        </FormInput>
      </section>

      <div className="flex-1" />

      <h3 className="text-center">FEEL FREE TO REACH OUT TO US FOR QUERIES</h3>
    </PageLayout>
  );
};

export default ContactPage;
