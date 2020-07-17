// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TrophyFilledSvg from '@whalue-design/icons-svg/lib/asn/TrophyFilled';

export default {
  name: 'IconTrophyFilled',
  displayName: 'TrophyFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TrophyFilledSvg } },
      children,
    ),
};