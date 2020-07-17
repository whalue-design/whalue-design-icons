// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import HourglassOutlinedSvg from '@whalue-design/icons-svg/lib/asn/HourglassOutlined';

export default {
  name: 'IconHourglassOutlined',
  displayName: 'HourglassOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HourglassOutlinedSvg } },
      children,
    ),
};