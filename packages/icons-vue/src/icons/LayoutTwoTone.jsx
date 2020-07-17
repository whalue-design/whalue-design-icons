// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LayoutTwoToneSvg from '@whalue-design/icons-svg/lib/asn/LayoutTwoTone';

export default {
  name: 'IconLayoutTwoTone',
  displayName: 'LayoutTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LayoutTwoToneSvg } },
      children,
    ),
};