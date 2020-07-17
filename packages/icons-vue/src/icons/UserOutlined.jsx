// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UserOutlinedSvg from '@whalue-design/icons-svg/lib/asn/UserOutlined';

export default {
  name: 'IconUserOutlined',
  displayName: 'UserOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UserOutlinedSvg } },
      children,
    ),
};