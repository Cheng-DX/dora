import {
  use,
} from 'echarts/core'

import {
  CanvasRenderer,
} from 'echarts/renderers'

import {
  BarChart,
  CustomChart,
  LineChart,
  PictorialBarChart,
  PieChart,
  ScatterChart,
} from 'echarts/charts'
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  LegendScrollComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  DataZoomComponent,
  MarkLineComponent,
  MarkPointComponent,
  LegendScrollComponent,
  PictorialBarChart,
  CustomChart,
  ScatterChart,
])
