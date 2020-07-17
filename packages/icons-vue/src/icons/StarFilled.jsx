// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import StarFilledSvg from '@whalue-design/icons-svg/lib/asn/StarFilled';

export default {
  name: 'IconStarFilled',
  displayName: 'StarFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StarFilledSvg } },
      children,
    ),
};