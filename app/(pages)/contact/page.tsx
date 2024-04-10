"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitInquiry } from "@/src/utils/actions";

const initialState = {
  success: false,
  message: "",
};

const Page = () => {
  const [formState, formAction] = useFormState(submitInquiry, initialState);

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className={`rounded px-8 py-2 text-white ${
          pending
            ? "cursor-not-allowed bg-gray-500"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        disabled={pending}
      >
        {pending ? "送信中..." : "送信"}
      </button>
    );
  }

  return (
    <div className="mx-auto mt-4 max-w-4xl px-4">
      <h1 className="my-5 whitespace-pre-wrap text-center text-3xl font-bold sm:text-4xl md:whitespace-nowrap">
        お問い合わせフォーム
      </h1>
      <form action={formAction}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-600"
          >
            お問い合わせ内容
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            required
            className="mt-1 w-full rounded-md border p-2"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <Submit />
        </div>
        <div
          className={`mt-4 flex justify-center ${
            formState.success ? "" : "text-red-600"
          }`}
        >
          {formState.message}
        </div>
      </form>
    </div>
  );
};

export default Page;
