// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UserSwitchOutlinedSvg from '@whalue-design/icons-svg/lib/asn/UserSwitchOutlined';

export default {
  name: 'IconUserSwitchOutlined',
  displayName: 'UserSwitchOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UserSwitchOutlinedSvg } },
      children,
    ),
};