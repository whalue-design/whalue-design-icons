// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DollarCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/DollarCircleTwoTone';

export default {
  name: 'IconDollarCircleTwoTone',
  displayName: 'DollarCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DollarCircleTwoToneSvg } },
      children,
    ),
};