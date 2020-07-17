// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CreditCardOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CreditCardOutlined';

export default {
  name: 'IconCreditCardOutlined',
  displayName: 'CreditCardOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CreditCardOutlinedSvg } },
      children,
    ),
};