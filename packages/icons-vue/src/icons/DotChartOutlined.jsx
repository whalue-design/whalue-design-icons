// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DotChartOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DotChartOutlined';

export default {
  name: 'IconDotChartOutlined',
  displayName: 'DotChartOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DotChartOutlinedSvg } },
      children,
    ),
};