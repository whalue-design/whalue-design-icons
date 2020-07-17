// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EyeInvisibleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/EyeInvisibleOutlined';

export default {
  name: 'IconEyeInvisibleOutlined',
  displayName: 'EyeInvisibleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EyeInvisibleOutlinedSvg } },
      children,
    ),
};