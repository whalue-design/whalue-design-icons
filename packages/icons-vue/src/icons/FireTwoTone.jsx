// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FireTwoToneSvg from '@whalue-design/icons-svg/lib/asn/FireTwoTone';

export default {
  name: 'IconFireTwoTone',
  displayName: 'FireTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FireTwoToneSvg } },
      children,
    ),
};