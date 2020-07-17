// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import OrderedListOutlinedSvg from '@whalue-design/icons-svg/lib/asn/OrderedListOutlined';

export default {
  name: 'IconOrderedListOutlined',
  displayName: 'OrderedListOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: OrderedListOutlinedSvg } },
      children,
    ),
};