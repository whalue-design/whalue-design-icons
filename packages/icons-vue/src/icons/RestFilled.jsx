// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RestFilledSvg from '@whalue-design/icons-svg/lib/asn/RestFilled';

export default {
  name: 'IconRestFilled',
  displayName: 'RestFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RestFilledSvg } },
      children,
    ),
};