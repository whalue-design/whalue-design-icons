// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UserDeleteOutlinedSvg from '@whalue-design/icons-svg/lib/asn/UserDeleteOutlined';

export default {
  name: 'IconUserDeleteOutlined',
  displayName: 'UserDeleteOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UserDeleteOutlinedSvg } },
      children,
    ),
};