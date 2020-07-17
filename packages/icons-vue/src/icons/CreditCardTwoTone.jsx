// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CreditCardTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CreditCardTwoTone';

export default {
  name: 'IconCreditCardTwoTone',
  displayName: 'CreditCardTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CreditCardTwoToneSvg } },
      children,
    ),
};