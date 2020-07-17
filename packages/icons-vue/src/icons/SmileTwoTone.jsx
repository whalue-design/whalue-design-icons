// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SmileTwoToneSvg from '@whalue-design/icons-svg/lib/asn/SmileTwoTone';

export default {
  name: 'IconSmileTwoTone',
  displayName: 'SmileTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SmileTwoToneSvg } },
      children,
    ),
};