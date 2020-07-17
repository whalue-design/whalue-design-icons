// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MobileTwoToneSvg from '@whalue-design/icons-svg/lib/asn/MobileTwoTone';

export default {
  name: 'IconMobileTwoTone',
  displayName: 'MobileTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MobileTwoToneSvg } },
      children,
    ),
};