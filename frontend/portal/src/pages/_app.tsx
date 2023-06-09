import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider, Layout } from "antd";
import { RelayEnvironment } from "@/relay_env";
import { UserProvider } from "@auth0/nextjs-auth0";
import { RelayEnvironmentProvider } from "react-relay";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const { Content, Footer } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#039093",
          colorBgBase: "#FFFFFF",
        },
        components: {
          Menu: {
            colorItemTextHover: "#FFFFFF",
            colorItemText: "#0d8d87",
            colorItemTextSelected: "#0d8d87",
            colorItemBgHover: "#0d8d87",
            colorItemBgSelected: "#FFFFFF",
            colorSubItemBg: "#FFFFFF",
            colorActiveBarBorderSize: 0,
          },
          Layout: {
            colorBgHeader: "#0d8d87",
          },
          Typography: {
            colorText: "#FFFFFF",
          },
        },
      }}
    >
      <UserProvider>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <Layout style={{ minHeight: "100vh" }}>
            <Header />
            <Layout>
              <Sidebar />
              <ConfigProvider
                theme={{
                  components: {
                    Typography: {
                      colorText: "#000000",
                    },
                  },
                }}
              >
                <Content
                  style={{
                    background: "#FFFFFF",
                  }}
                >
                  <Component {...pageProps} />
                </Content>
              </ConfigProvider>
            </Layout>
          </Layout>
        </RelayEnvironmentProvider>
      </UserProvider>
    </ConfigProvider>
  );
}
