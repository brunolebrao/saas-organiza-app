'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {CurrencyDollarIcon} from '@heroicons/react/20/solid'
import { ResponsiveLine } from "@nivo/line"

type PrivateTemplateProps = {
  title: string;
  value: string;
  percentage: string;
  Icon: React.FC;
};

export const PrivateTemplate = () => {
  return (
    <Card className="min-w-3 max-w-96 bg-white p-4 rounded-lg shadow-md">
      <CardHeader className="flex flex-row justify-between items-center p-2">
        <CardTitle className="text-xl font-semibold text-gray-500">Entrada</CardTitle>
        <CurrencyDollarIcon className="w-6 h-6 text-orange-700" />
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-between p-2">
        <div className="text-3xl font-bold text-green-600">R$ 1.025,00</div>
        <div className="text-sm text-gray-500">10% a mais que o mês anterior</div>
        {/* <FilledtimeseriesChart className="aspect-[2/1]" /> */}
      </CardContent>
    </Card>
  )
}

function FilledtimeseriesChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        curve="monotoneX"
        enableArea={true}
        gridYValues={6}
        defs={[
          {
            id: "line-chart-gradient",
            type: "linearGradient",
            colors: [
              { offset: 0, color: "inherit" },
              { offset: 200, color: "inherit", opacity: 0 },
            ],
          },
        ]}
        fill={[{ match: "*", id: "line-chart-gradient" }]}
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
        role="application"
      />
    </div>
  )
}