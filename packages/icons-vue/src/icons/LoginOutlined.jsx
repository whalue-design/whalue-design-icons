// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LoginOutlinedSvg from '@whalue-design/icons-svg/lib/asn/LoginOutlined';

export default {
  name: 'IconLoginOutlined',
  displayName: 'LoginOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LoginOutlinedSvg } },
      children,
    ),
};