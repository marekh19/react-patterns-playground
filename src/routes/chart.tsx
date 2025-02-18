import { createFileRoute } from "@tanstack/react-router";
import { Chart } from "../components/Chart";

export const Route = createFileRoute("/chart")({
  component: ChartPage,
});

function ChartPage() {
  return (
    <main className="px-10">
      <section className="mt-6">
        <h1 className="text-3xl font-bold mb-10">Chart</h1>
        <div className="h-[60dvh]">
          <Chart />
        </div>
      </section>
    </main>
  );
}
