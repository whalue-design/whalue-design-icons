// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CustomerServiceFilledSvg from '@whalue-design/icons-svg/lib/asn/CustomerServiceFilled';

export default {
  name: 'IconCustomerServiceFilled',
  displayName: 'CustomerServiceFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CustomerServiceFilledSvg } },
      children,
    ),
};