// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MehTwoToneSvg from '@whalue-design/icons-svg/lib/asn/MehTwoTone';

export default {
  name: 'IconMehTwoTone',
  displayName: 'MehTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MehTwoToneSvg } },
      children,
    ),
};