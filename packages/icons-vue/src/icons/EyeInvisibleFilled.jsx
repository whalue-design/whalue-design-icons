// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EyeInvisibleFilledSvg from '@whalue-design/icons-svg/lib/asn/EyeInvisibleFilled';

export default {
  name: 'IconEyeInvisibleFilled',
  displayName: 'EyeInvisibleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EyeInvisibleFilledSvg } },
      children,
    ),
};