import Head from "next/head";
import { FunctionComponentEx } from "@/src/types";
import { TopBar } from "./TopBar";

export type TemplateProps = {
  title: string;
};

export const Template: FunctionComponentEx<TemplateProps> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <TopBar title={title} />

      <div className="container mx-auto mt-[4rem] px-5 lg:px-0 py-4">{children}</div>
    </>
  );
};
