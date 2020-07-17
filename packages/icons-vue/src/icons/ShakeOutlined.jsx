// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ShakeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ShakeOutlined';

export default {
  name: 'IconShakeOutlined',
  displayName: 'ShakeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ShakeOutlinedSvg } },
      children,
    ),
};