// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GoldenFilledSvg from '@whalue-design/icons-svg/lib/asn/GoldenFilled';

export default {
  name: 'IconGoldenFilled',
  displayName: 'GoldenFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GoldenFilledSvg } },
      children,
    ),
};