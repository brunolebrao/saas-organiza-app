'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { CurrencyDollarIcon, ArrowDownLeftIcon, ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { ResponsiveBar } from "@nivo/bar"
import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
const CalendarFormDynamic = dynamic(() => import('./components/form-calendar'), { ssr: false })

type PrivateTemplateProps = {
  title: string;
  value: string;
  percentage: string;
  Icon: React.FC;
};

export const PrivateTemplate = () => {

  
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-lg md:text-xl">Home</h1>
          {/* <div className="ml-auto flex items-center gap-2">
            <Button className="hidden sm:flex" variant="outline">
              Hoje
            </Button>
            <Button className="hidden md:flex" variant="outline">
              Este mês
            </Button>
            <CalendarFormDynamic />
          </div> */}
        </div>

      </main>
      <div className="flex flex-col justify-between gap-7 p-5">
        <Card className="min-w-3 w-full bg-white p-4 rounded-lg shadow-md">
          <CardHeader className="flex flex-row justify-between items-center p-2">
            <CardTitle className="text-xl font-semibold text-orange-400">Entrada</CardTitle>
            <ArrowDownLeftIcon className="w-8 h-8 text-green-600" />
          </CardHeader>
            {/* <BarChart className="aspect-[2/1]" />
            <Separator /> */}
          <CardContent className="flex flex-col items-end justify-between pt-4">
            <div className="text-3xl font-bold text-green-600">R$ 1.025,00</div>
            <div className="text-sm text-gray-500">10% a mais que o mês anterior</div>
          </CardContent>
        </Card>
        <Card className="min-w-3  w-full bg-white p-4 rounded-lg shadow-md">
          <CardHeader className="flex flex-row justify-between items-center p-2">
            <CardTitle className="text-xl font-semibold text-gray-600">Saida</CardTitle>
            <ArrowUpRightIcon className="w-8 h-8 text-orange-700" />
          </CardHeader>
            {/* <BarChart className="aspect-[2/1]" />
            <Separator /> */}
          <CardContent className="flex flex-col items-end justify-between pt-4">
            <div className="text-3xl font-bold text-red-700">R$ 1.025,00</div>
            <div className="text-sm text-gray-500">10% a mais que o mês anterior</div>
          </CardContent>
        </Card>
        <Card className="min-w-3  w-full bg-white p-4 rounded-lg shadow-md">
          <CardHeader className="flex flex-row justify-between items-center p-2">
            <CardTitle className="text-xl font-semibold text-gray-600">Total</CardTitle>
            <CurrencyDollarIcon className="w-8 h-8 text-green-600" />
          </CardHeader>
            {/* <BarChart className="aspect-[2/1]" />
            <Separator /> */}
          <CardContent className="flex flex-col items-end justify-between pt-4">
            <div className="text-3xl font-bold text-green-600">R$ 15.025,00</div>
            <div className="text-sm text-gray-500">10% a mais que o mês anterior</div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "FeV", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Abr", count: 119 },
          { name: "Mai", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#6175a5"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}