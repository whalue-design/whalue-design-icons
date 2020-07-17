// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CarryOutOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CarryOutOutlined';

export default {
  name: 'IconCarryOutOutlined',
  displayName: 'CarryOutOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CarryOutOutlinedSvg } },
      children,
    ),
};