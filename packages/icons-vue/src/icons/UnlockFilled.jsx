// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UnlockFilledSvg from '@whalue-design/icons-svg/lib/asn/UnlockFilled';

export default {
  name: 'IconUnlockFilled',
  displayName: 'UnlockFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UnlockFilledSvg } },
      children,
    ),
};