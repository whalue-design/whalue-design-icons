// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import HddFilledSvg from '@whalue-design/icons-svg/lib/asn/HddFilled';

export default {
  name: 'IconHddFilled',
  displayName: 'HddFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HddFilledSvg } },
      children,
    ),
};