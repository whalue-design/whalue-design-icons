// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WalletFilledSvg from '@whalue-design/icons-svg/lib/asn/WalletFilled';

export default {
  name: 'IconWalletFilled',
  displayName: 'WalletFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WalletFilledSvg } },
      children,
    ),
};