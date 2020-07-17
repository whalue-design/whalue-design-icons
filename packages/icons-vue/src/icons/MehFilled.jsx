// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MehFilledSvg from '@whalue-design/icons-svg/lib/asn/MehFilled';

export default {
  name: 'IconMehFilled',
  displayName: 'MehFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MehFilledSvg } },
      children,
    ),
};