// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CarFilledSvg from '@whalue-design/icons-svg/lib/asn/CarFilled';

export default {
  name: 'IconCarFilled',
  displayName: 'CarFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CarFilledSvg } },
      children,
    ),
};