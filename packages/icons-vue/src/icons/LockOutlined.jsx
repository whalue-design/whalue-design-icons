// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LockOutlinedSvg from '@whalue-design/icons-svg/lib/asn/LockOutlined';

export default {
  name: 'IconLockOutlined',
  displayName: 'LockOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LockOutlinedSvg } },
      children,
    ),
};