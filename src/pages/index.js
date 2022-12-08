import { PageLayout } from "../components/layouts/PageLayout";

export default function Home() {
  return (
    <PageLayout
      title="Bionary Club"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl text-white text-center">
        Welcome to Bionary club
      </h1>
    </PageLayout>
  );
}
