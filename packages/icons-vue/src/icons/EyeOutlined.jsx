// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EyeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/EyeOutlined';

export default {
  name: 'IconEyeOutlined',
  displayName: 'EyeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EyeOutlinedSvg } },
      children,
    ),
};