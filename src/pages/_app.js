import "regenerator-runtime/runtime";
import "@/styles/globals.css";
import { LandingLayout } from "@/layouts/LandingLayout";

export default function App({ Component, pageProps }) {
  return (
    <LandingLayout>
      <Component {...pageProps} />
    </LandingLayout>
  );
}
