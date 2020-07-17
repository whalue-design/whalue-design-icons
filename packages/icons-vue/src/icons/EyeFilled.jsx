// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EyeFilledSvg from '@whalue-design/icons-svg/lib/asn/EyeFilled';

export default {
  name: 'IconEyeFilled',
  displayName: 'EyeFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EyeFilledSvg } },
      children,
    ),
};