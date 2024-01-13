import React, { ReactElement } from "react";
import Dashboard from "@/container/Dashboard";
import Layout from "../layout";
import NestedLayout from "./nested-layout";
import type { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout = () => {
  return <Dashboard />;
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default DashboardPage;
