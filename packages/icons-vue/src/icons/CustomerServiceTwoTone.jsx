// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CustomerServiceTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CustomerServiceTwoTone';

export default {
  name: 'IconCustomerServiceTwoTone',
  displayName: 'CustomerServiceTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CustomerServiceTwoToneSvg } },
      children,
    ),
};