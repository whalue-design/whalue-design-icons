// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ClockCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/ClockCircleFilled';

export default {
  name: 'IconClockCircleFilled',
  displayName: 'ClockCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ClockCircleFilledSvg } },
      children,
    ),
};