// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CarTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CarTwoTone';

export default {
  name: 'IconCarTwoTone',
  displayName: 'CarTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CarTwoToneSvg } },
      children,
    ),
};