// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ForwardFilledSvg from '@whalue-design/icons-svg/lib/asn/ForwardFilled';

export default {
  name: 'IconForwardFilled',
  displayName: 'ForwardFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ForwardFilledSvg } },
      children,
    ),
};