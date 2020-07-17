// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UserAddOutlinedSvg from '@whalue-design/icons-svg/lib/asn/UserAddOutlined';

export default {
  name: 'IconUserAddOutlined',
  displayName: 'UserAddOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UserAddOutlinedSvg } },
      children,
    ),
};