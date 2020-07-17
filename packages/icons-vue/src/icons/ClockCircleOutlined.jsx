// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ClockCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ClockCircleOutlined';

export default {
  name: 'IconClockCircleOutlined',
  displayName: 'ClockCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ClockCircleOutlinedSvg } },
      children,
    ),
};