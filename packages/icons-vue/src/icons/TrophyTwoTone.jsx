// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TrophyTwoToneSvg from '@whalue-design/icons-svg/lib/asn/TrophyTwoTone';

export default {
  name: 'IconTrophyTwoTone',
  displayName: 'TrophyTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TrophyTwoToneSvg } },
      children,
    ),
};