// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CarryOutFilledSvg from '@whalue-design/icons-svg/lib/asn/CarryOutFilled';

export default {
  name: 'IconCarryOutFilled',
  displayName: 'CarryOutFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CarryOutFilledSvg } },
      children,
    ),
};