// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CarryOutTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CarryOutTwoTone';

export default {
  name: 'IconCarryOutTwoTone',
  displayName: 'CarryOutTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CarryOutTwoToneSvg } },
      children,
    ),
};