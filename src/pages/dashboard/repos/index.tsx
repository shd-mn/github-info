import Repos from "@/components/Repos";
import Layout from "@/pages/layout";
import React, { ReactElement } from "react";
import NestedLayout from "../nested-layout";
import type { NextPageWithLayout } from "../../_app";

const ReposPage: NextPageWithLayout = () => {
  return <Repos />;
};

ReposPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
export default ReposPage;
