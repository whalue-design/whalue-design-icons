// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BoxPlotTwoToneSvg from '@whalue-design/icons-svg/lib/asn/BoxPlotTwoTone';

export default {
  name: 'IconBoxPlotTwoTone',
  displayName: 'BoxPlotTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BoxPlotTwoToneSvg } },
      children,
    ),
};