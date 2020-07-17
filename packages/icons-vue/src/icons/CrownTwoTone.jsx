// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CrownTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CrownTwoTone';

export default {
  name: 'IconCrownTwoTone',
  displayName: 'CrownTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CrownTwoToneSvg } },
      children,
    ),
};