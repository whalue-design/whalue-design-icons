// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LockTwoToneSvg from '@whalue-design/icons-svg/lib/asn/LockTwoTone';

export default {
  name: 'IconLockTwoTone',
  displayName: 'LockTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LockTwoToneSvg } },
      children,
    ),
};